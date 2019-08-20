function isPuz(bytes) {
  const label = "ACROSS&DOWN";
  for (let i = 0; i < label.length; i += 1) {
    if (bytes[2 + i] !== label.charCodeAt(i)) return false;
  }
  return bytes[2 + label.length] === 0;
}

function readString(buf, pos) {
  const result = [];
  while (true) {
    pos += 1;
    const c = buf[pos];
    if (c === 0) break;
    result.push(String.fromCodePoint(c));
  }
  return { string: result.join(""), pos };
}

function puzToJson(bytes) {
  const buf = bytes;
  let pos;
  const json = {};
  const w = buf[0x2c];
  const h = buf[0x2d];

  json.size = { cols: w, rows: h };
  const grid = [];
  for (let i = 0; i < w * h; i += 1) {
    grid.push({
      fill: String.fromCodePoint(buf[0x34 + i]),
      clueNum: null,
      hasCircle: null,
      index: i
    });
  }
  json.grid = grid;
  pos = 0x33 + 2 * w * h;
  let result = readString(buf, pos);
  json.title = result.string;
  pos = result.pos;
  result = readString(buf, pos);
  json.author = result.string;
  pos = result.pos;
  result = readString(buf, pos);
  json.copyright = result.string;
  pos = result.pos;

  const across = [];
  const down = [];

  let label = 1;
  for (let i = 0; i < w * h; i += 1) {
    if (grid[i].fill === ".") {
      continue;
    }
    let inc = 0;
    if (i % w === 0 || grid[i - 1].fill === ".") {
      result = readString(buf, pos);
      pos = result.pos;
      across.push({ clueNum: label, text: result.string, answer: null });
      inc = 1;
    }
    if (i < w || grid[i - w].fill === ".") {
      result = readString(buf, pos);
      pos = result.pos;
      down.push({ clueNum: label, text: result.string, answer: null });
      inc = 1;
    }

    if (i % w === 0 || grid[i - 1].fill === ".") {
      grid[i].clueNum = label;
    } else if (i < w || grid[i - w].fill === ".") {
      grid[i].clueNum = label;
    }

    label += inc;
  }
  json.clues = { across, down };
  return json;
}

export default async function convertPuzToJson(files) {
  const file = files[0];
  if (!file) {
    return null;
  }
  const fileType = file.name.slice(file.name.lastIndexOf("."));
  const reader = new FileReader();

  if (fileType === ".puz") {
    return new Promise(resolve => {
      reader.onload = e => {
        const bytes = new Uint8Array(e.target.result);
        let puz;
        if (isPuz(bytes)) {
          puz = puzToJson(bytes);
        }
        resolve(puz);
      };
      reader.readAsArrayBuffer(file);
    });
  }
  return null;
}

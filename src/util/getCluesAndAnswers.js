function getWordAtIndex(grid, index, direction) {
  let word = "";
  let incrementor;
  let lineEnd;
  if (direction === "across") {
    incrementor = 1;
    lineEnd = index + (15 - (index % 15));
  } else if (direction === "down") {
    incrementor = 15;
    lineEnd = 211 + (index % 15);
  }
  for (let i = index; i < lineEnd; i += incrementor) {
    if (grid[i].fill === ".") {
      return word;
    }
    if (grid[i].fill === "") {
      word += "_ ";
    } else {
      word += grid[i].fill;
    }
  }
  return word;
}

export default function drawPDFGrid(currentPuzzle) {
  const { across } = currentPuzzle.clues;
  const { down } = currentPuzzle.clues;

  let acrossClueIndex = 0;
  let downClueIndex = 0;

  for (let i = 0; i < currentPuzzle.grid.length; i += 1) {
    if (acrossClueIndex < across.length) {
      if (currentPuzzle.grid[i].clueNum === across[acrossClueIndex].clueNum) {
        const word = getWordAtIndex(currentPuzzle.grid, i, "across");
        across[acrossClueIndex].answer = word;
        acrossClueIndex += 1;
      }
    }
  }

  for (let i = 0; i < currentPuzzle.grid.length; i += 1) {
    if (downClueIndex < down.length) {
      if (currentPuzzle.grid[i].clueNum === down[downClueIndex].clueNum) {
        const word = getWordAtIndex(currentPuzzle.grid, i, "down");
        down[downClueIndex].answer = word;
        downClueIndex += 1;
      }
    }
  }
  return { across, down };
}

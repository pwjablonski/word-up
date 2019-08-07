export default function updateGridClueNums(grid) {
  const newGrid = [];
  let label = 1;
  for (let i = 0; i < grid.length; i += 1) {
    if (grid[i].fill === ".") {
      newGrid.push({ index: i, fill: grid[i].fill, clueNum: null });
    } else if (
      (i % 15 === 0 || grid[i - 1].fill === ".") &&
      (i < 15 || grid[i - 15].fill === ".")
    ) {
      newGrid.push({ index: i, fill: grid[i].fill, clueNum: label });
      label += 1;
    } else if (i % 15 === 0 || grid[i - 1].fill === ".") {
      newGrid.push({ index: i, fill: grid[i].fill, clueNum: label });
      label += 1;
    } else if (i < 15 || grid[i - 15].fill === ".") {
      newGrid.push({ index: i, fill: grid[i].fill, clueNum: label });
      label += 1;
    } else {
      newGrid.push({ index: i, fill: grid[i].fill, clueNum: null });
    }
  }

  return newGrid;
}

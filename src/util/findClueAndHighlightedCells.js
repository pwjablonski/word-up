export default function findClueAndHilightecCells(
  currentDirection,
  currentCell,
  grid
) {
  let newHighlightedCells = [];
  let lineStart;
  let lineEnd;
  let incrementor;
  let shouldReturnCells = false;

  if (currentDirection === "across") {
    lineStart = currentCell - (currentCell % 15);
    lineEnd = lineStart + 15;
    incrementor = 1;
  } else if (currentDirection === "down") {
    lineStart = 0 + (currentCell % 15);
    lineEnd = lineStart + 211;
    incrementor = 15;
  }

  let newClue;

  if (grid[currentCell].fill === ".") {
    newClue = null;
  } else {
    newClue = grid[lineStart].clueNum;
    for (let i = lineStart; i < lineEnd; i += incrementor) {
      if (i === currentCell) {
        newHighlightedCells.push(i);
        shouldReturnCells = true;
      } else if (grid[i].fill === "." && shouldReturnCells) {
        return { newClue, newHighlightedCells };
      } else if (grid[i].fill === "." && !shouldReturnCells) {
        newHighlightedCells = [];
        newClue = grid[i + incrementor].clueNum;
      } else {
        newHighlightedCells.push(i);
      }
    }
  }
  return { newClue, newHighlightedCells };
}

import getCurrentPuzzleGrid from "./getCurrentPuzzleGrid";

export default function getCurrentCellData(state) {
  const currentPuzzleGrid = getCurrentPuzzleGrid(state);
  return currentPuzzleGrid[state.ui.currentCell];
}

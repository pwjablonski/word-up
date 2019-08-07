import getCurrentPuzzleKey from "./getCurrentPuzzleKey";

export default function getCurrentPuzzle(state) {
  const currentPuzzleKey = getCurrentPuzzleKey(state);
  if (currentPuzzleKey) {
    return state.puzzles[state.currentPuzzle.puzzleKey];
  }
  return null;
}

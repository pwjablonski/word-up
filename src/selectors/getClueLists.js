import getCurrentPuzzle from "./getCurrentPuzzle";

export default function getClueLists(state) {
  const currentPuzzle = getCurrentPuzzle(state);
  if (currentPuzzle) {
    return currentPuzzle.clues;
  }
  return null;
}

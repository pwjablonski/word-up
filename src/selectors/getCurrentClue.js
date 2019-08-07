import getCurrentPuzzle from "./getCurrentPuzzle";
import getCurrentDirection from "./getCurrentDirection";
import getCurrentClueNum from "./getCurrentClueNum";

export default function getCurrentClue(state) {
  const currentPuzzle = getCurrentPuzzle(state);
  const currentDirection = getCurrentDirection(state);
  const currentClueNum = getCurrentClueNum(state);

  if (currentPuzzle) {
    return currentPuzzle.clues[currentDirection].find(clue => {
      return clue.clueNum === currentClueNum;
    });
  }
  return null;
}

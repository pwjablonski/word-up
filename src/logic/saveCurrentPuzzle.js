import { createLogic } from "redux-logic";
import { savePuzzle } from "../clients/firebase";
import { getCurrentPuzzle, getCurrentUserId } from "../selectors";
import isPristinePuzzle from "../util/isPristinePuzzle";

export default createLogic({
  type: [
    "SAVE_CURRENT_PUZZLE",
    "AUTHOR_CHANGED",
    "TITLE_CHANGED",
    "CLUE_TEXT_CHANGED",
    "TOGGLE_CIRCLE",
    "GENERATE_PATTERN"
  ],
  async process({ getState }, dispatch, done) {
    const state = getState();
    const currentPuzzle = getCurrentPuzzle(state);
    const currentUserId = getCurrentUserId(state);

    if (currentPuzzle && currentUserId && !isPristinePuzzle(currentPuzzle)) {
      savePuzzle(currentUserId, currentPuzzle);
    }
    done();
  }
});

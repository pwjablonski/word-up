import { createLogic } from "redux-logic";
import shortid from "shortid";
import { puzzleCreated } from "../actions";
import { getCurrentUser } from "../selectors";
import createEmptyPuzzle from "../util/createEmptyPuzzle";

export default createLogic({
  type: "CREATE_PUZZLE",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const user = getCurrentUser(state);
    const puzzleKey = shortid.generate();
    const puzzle = createEmptyPuzzle(puzzleKey, 15, 15);
    if (user.displayName) {
      puzzle.author = user.displayName;
    } else {
      puzzle.author = "No Author";
    }
    dispatch(puzzleCreated(puzzleKey, puzzle));
    done();
  }
});

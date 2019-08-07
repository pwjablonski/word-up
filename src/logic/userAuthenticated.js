import { createLogic } from "redux-logic";
import { loadAllProjects } from "../clients/firebase";
import { getCurrentUserId } from "../selectors";

import { saveCurrentPuzzle, puzzlesLoaded } from "../actions";

export default createLogic({
  type: "USER_AUTHENTICATED",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const currentUserId = getCurrentUserId(state);
    dispatch(saveCurrentPuzzle());
    const allPuzzles = await loadAllProjects(currentUserId);
    dispatch(puzzlesLoaded(allPuzzles));
    done();
  }
});

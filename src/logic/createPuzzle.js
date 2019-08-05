import { createLogic } from "redux-logic";
import shortid from "shortid";
import {puzzleCreated} from "../actions"
import { getCurrentUser } from "../selectors";

export default createLogic({
  type: "CREATE_PUZZLE",
  async process({ getState, action }, dispatch, done) {
    const state = getState()
    const user = getCurrentUser(state)
    dispatch(puzzleCreated(shortid.generate(), user));
    done();
  }
});

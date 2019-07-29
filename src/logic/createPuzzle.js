import { createLogic } from "redux-logic";
import shortid from "shortid";
import {puzzleCreated} from "../actions"

export default createLogic({
  type: "CREATE_PUZZLE",
  async process({ action }, dispatch, done) {
    dispatch(puzzleCreated(shortid.generate()));
    done();
  }
});

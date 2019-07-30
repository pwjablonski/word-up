import { createLogic } from "redux-logic";
import {
  createPuzzle,
  updateUI,
 } from '../actions'

export default createLogic({
  type: "APPLICATION_LOADED",
  async process({ action }, dispatch, done) {
    dispatch(createPuzzle());
    dispatch(updateUI(0, "across"));
    done();
  }
});

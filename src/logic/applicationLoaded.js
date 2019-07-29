import { createLogic } from "redux-logic";
import { createPuzzle } from '../actions'

export default createLogic({
  type: "APPLICATION_LOADED",
  async process({ action }, dispatch, done) {
    dispatch(createPuzzle());
    done();
  }
});

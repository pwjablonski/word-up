import { createLogic } from "redux-logic";
import shortid from "shortid";
import convertPuzToJson from "../util/convertPuzToJson";
import { puzzleCreated } from "../actions";

export default createLogic({
  type: "UPLOAD_PUZ",
  async process({ action }, dispatch, done) {
    const puzzle = await convertPuzToJson(action.payload.files);
    const puzzleKey = shortid.generate();
    puzzle.puzzleKey = puzzleKey;
    dispatch(puzzleCreated(puzzleKey, puzzle));
    done();
  }
});

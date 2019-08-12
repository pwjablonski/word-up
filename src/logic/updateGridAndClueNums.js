import { createLogic } from "redux-logic";
import { gridUpdated } from "../actions";
import { getCurrentPuzzle, getCurrentPuzzleKey } from "../selectors";
import updateClues from "../util/updateClues";
import updateGridClueNums from "../util/updateGridClueNums";

export default createLogic({
  type: "UPDATE_GRID_AND_CLUE_NUMS",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const currentPuzzle = getCurrentPuzzle(state);
    const currentPuzzleKey = getCurrentPuzzleKey(state);
    const newGrid = updateGridClueNums(currentPuzzle.grid);

    const newClues = updateClues(newGrid, currentPuzzle.clues);

    await dispatch(gridUpdated(currentPuzzleKey, newGrid, newClues));

    done();
  }
});

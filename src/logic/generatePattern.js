import { createLogic } from "redux-logic";

import { updateUI, gridUpdated } from "../actions";
import {
  getCurrentCell,
  getCurrentDirection,
  getCurrentPuzzleKey
} from "../selectors";
import generatePattern from "../util/generatePattern";
import updateClues from "../util/updateClues";
import updateGridClueNums from "../util/updateGridClueNums";

export default createLogic({
  type: "GENERATE_PATTERN",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const currentPuzzleKey = getCurrentPuzzleKey(state);
    const currentDirection = getCurrentDirection(state);
    const currentCell = getCurrentCell(state);

    const gridPattern = generatePattern();
    const newGrid = updateGridClueNums(gridPattern);
    const newClues = updateClues(newGrid);

    await dispatch(gridUpdated(currentPuzzleKey, newGrid, newClues));
    await dispatch(updateUI(currentCell, currentDirection));
    done();
  }
});

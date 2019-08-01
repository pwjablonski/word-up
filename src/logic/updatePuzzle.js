import { createLogic } from "redux-logic";
import {
  gridUpdated,
} from "../actions"
import {
  getCurrentPuzzle,
  getCurrentPuzzleKey,
  getCurrentCell
} from "../selectors"
import updateClues from "../util/updateClues"
import updateGridClueNums from "../util/updateGridClueNums"

export default createLogic({
  type: "UPDATE_PUZZLE",
  async process({getState, action}, dispatch, done) {
    const state = getState()
    const currentPuzzle = getCurrentPuzzle(state)
    const currentPuzzleKey = getCurrentPuzzleKey(state)
    const currentCell = getCurrentCell(state)

    currentPuzzle.grid[currentCell].fill = action.payload.key
    const newGrid = updateGridClueNums(currentPuzzle.grid);
    const newClues = updateClues(newGrid, currentPuzzle.clues);
 
    await dispatch(gridUpdated(currentPuzzleKey, newGrid, newClues));

    done();
  }
});

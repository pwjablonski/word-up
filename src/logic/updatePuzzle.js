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

export default createLogic({
  type: "UPDATE_PUZZLE",
  async process({getState, action}, dispatch, done) {
    const state = getState()
    const currentPuzzle = getCurrentPuzzle(state)
    const currentPuzzleKey = getCurrentPuzzleKey(state)
    const currentCell = getCurrentCell(state)

    currentPuzzle.grid[currentCell].fill = action.payload.key
    const {newGrid, newClues} = updateClues(currentPuzzle);
 
    await dispatch(gridUpdated(currentPuzzleKey, newGrid, newClues));

    done();
  }
});

import { createLogic } from "redux-logic";
import {
  gridUpdated,
  saveCurrentPuzzle
} from "../actions"
import {
  getCurrentPuzzle,
  getCurrentPuzzleKey,
  getCurrentCell,
  isSymmetryEnabled
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
    const symmetryIsEnabled = isSymmetryEnabled(state)
    
    if(symmetryIsEnabled && action.payload.key === "."){
      currentPuzzle.grid[currentCell].fill = action.payload.key
      const symmetricCell = 224 - currentCell;
      currentPuzzle.grid[symmetricCell].fill = "."
    } else if( symmetryIsEnabled && currentPuzzle.grid[currentCell].fill === "."){
      currentPuzzle.grid[currentCell].fill = action.payload.key
      const symmetricCell = 224 - currentCell;;
      currentPuzzle.grid[symmetricCell].fill = ""
    } else {
      currentPuzzle.grid[currentCell].fill = action.payload.key
    }

    const newGrid = updateGridClueNums(currentPuzzle.grid);
    const newClues = updateClues(newGrid, currentPuzzle.clues);
 
    await dispatch(gridUpdated(currentPuzzleKey, newGrid, newClues));
    dispatch(saveCurrentPuzzle());
    done();
  }
});

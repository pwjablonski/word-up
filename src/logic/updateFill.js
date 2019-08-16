import { createLogic } from "redux-logic";
import { fillUpdated } from "../actions";
import {
  getCurrentPuzzle,
  getCurrentPuzzleKey,
  getCurrentCell,
  isSymmetryEnabled
} from "../selectors";

export default createLogic({
  type: "UPDATE_FILL",
  async process({ getState, action }, dispatch, done) {
    const state = getState();
    const currentPuzzle = getCurrentPuzzle(state);
    const currentPuzzleKey = getCurrentPuzzleKey(state);
    const currentCell = getCurrentCell(state);
    const symmetryIsEnabled = isSymmetryEnabled(state);

    if (symmetryIsEnabled && action.payload.fill === ".") {
      await dispatch(
        fillUpdated(currentPuzzleKey, currentCell, action.payload.fill)
      );
      const symmetricCell = 224 - currentCell;
      await dispatch(fillUpdated(currentPuzzleKey, symmetricCell, "."));
    } else if (
      symmetryIsEnabled &&
      currentPuzzle.grid[currentCell].fill === "."
    ) {
      dispatch(fillUpdated(currentPuzzleKey, currentCell, action.payload.fill));
      const symmetricCell = 224 - currentCell;
      await dispatch(
        fillUpdated(currentPuzzleKey, symmetricCell, action.payload.fill)
      );
    } else {
      await dispatch(
        fillUpdated(currentPuzzleKey, currentCell, action.payload.fill)
      );
    }

    done();
  }
});

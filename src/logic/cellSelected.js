import { createLogic } from "redux-logic";
import { updateUI } from "../actions";
import { getCurrentCell, getCurrentDirection } from "../selectors";

export default createLogic({
  type: "CELL_SELECTED",
  async process(
    {
      getState,
      action: {
        payload: { cell }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const currentCell = getCurrentCell(state);
    const currentDirection = getCurrentDirection(state);

    if (currentCell === cell) {
      if (currentDirection === "across") {
        dispatch(updateUI(currentCell, "down"));
      } else if (currentDirection === "down") {
        dispatch(updateUI(currentCell, "across"));
      }
    } else {
      dispatch(updateUI(cell, currentDirection));
    }
    done();
  }
});

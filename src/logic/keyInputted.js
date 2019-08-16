import { createLogic } from "redux-logic";
import { updateUI, updateGridAndClueNums, updateFill } from "../actions";
import { getCurrentCell, getCurrentDirection } from "../selectors";

export default createLogic({
  type: "KEY_INPUTTED",
  async process(
    {
      getState,
      action: {
        payload: { key }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const currentDirection = getCurrentDirection(state);
    const currentCell = getCurrentCell(state);

    switch (key) {
      case "ArrowDown":
        if (currentDirection === "across") {
          dispatch(updateUI(currentCell, "down"));
        } else if (currentCell < 210) {
          dispatch(updateUI(currentCell + 15, currentDirection));
        }
        break;
      case "ArrowUp":
        if (currentDirection === "across") {
          dispatch(updateUI(currentCell, "down"));
        } else if (currentCell > 14) {
          dispatch(updateUI(currentCell - 15, currentDirection));
        }
        break;
      case "ArrowRight":
        if (currentDirection === "down") {
          dispatch(updateUI(currentCell, "across"));
        } else if (currentCell < 224) {
          dispatch(updateUI(currentCell + 1, currentDirection));
        }
        break;
      case "ArrowLeft":
        if (currentDirection === "down") {
          dispatch(updateUI(currentCell, "across"));
        } else if (currentCell > 0) {
          dispatch(updateUI(currentCell - 1, currentDirection));
        }
        break;
      case "Backspace": {
        let nextCell = currentCell;
        if (currentCell > 0 && currentDirection === "across") {
          nextCell -= 1;
        }
        if (currentCell > 14 && currentDirection === "down") {
          nextCell -= 15;
        }
        await dispatch(updateFill(""));
        await dispatch(updateGridAndClueNums());
        await dispatch(updateUI(nextCell, currentDirection));
        break;
      }
      case "Enter":
      case "Tab": {
        break;
      }
      case "Control":
      case "Alt":
      case "Meta":
      case "Escape":
      case "Shift": {
        break;
      }
      default: {
        let nextCell = currentCell;
        if (currentCell < 224 && currentDirection === "across") {
          nextCell += 1;
        }
        if (currentCell < 210 && currentDirection === "down") {
          nextCell += 15;
        }
        await dispatch(updateFill(key.toUpperCase()));
        await dispatch(updateGridAndClueNums());
        await dispatch(updateUI(nextCell, currentDirection));
        break;
      }
    }
    done();
  }
});

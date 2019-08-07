import { createLogic } from "redux-logic";
import { updateUI } from "../actions";

import { getCurrentPuzzleGrid } from "../selectors";

export default createLogic({
  type: "CLUE_LIST_ITEM_CLICKED",
  async process(
    {
      getState,
      action: {
        payload: { clueNum, direction }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const currentPuzzleGrid = getCurrentPuzzleGrid(state);
    const selectedCell = currentPuzzleGrid.find(item => {
      return clueNum === item.clueNum;
    });
    dispatch(updateUI(selectedCell.index, direction));

    done();
  }
});

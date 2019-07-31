import { createLogic } from "redux-logic";
import {
    updateCurrentCell,
    updateCurrentDirection,
    updateCurrentClue,
    updateHighlightedCells,
    fetchWords
} from "../actions"
import findClueAndHighlightedCells from "../util/findClueAndHighlightedCells"
import {
  getCurrentPuzzleGrid,
  isWordSelectorOpen,
} from "../selectors";

export default createLogic({
  type: "UPDATE_UI",
  async process({getState, action}, dispatch, done) {
    const state = getState()
    const grid = getCurrentPuzzleGrid(state)
    const wordSelectorIsOpen = isWordSelectorOpen(state)

    dispatch(updateCurrentCell(action.payload.nextCell));
    dispatch(updateCurrentDirection(action.payload.direction));

    const {newClue, newHighlightedCells} = findClueAndHighlightedCells(
      action.payload.direction,
      action.payload.nextCell,
      grid
    )
    if(wordSelectorIsOpen){
      dispatch(fetchWords())
    }
    dispatch(updateCurrentClue(newClue));
    dispatch(updateHighlightedCells(newHighlightedCells));
    done();
  }
});
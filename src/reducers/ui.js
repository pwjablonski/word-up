import produce from "immer";
import { handleActions } from "redux-actions";
import {
  updateCurrentCell,
  updateCurrentClue,
  updateHighlightedCells,
  updateCurrentDirection,
} from "../actions";

const initialState = {
  currentCell: 0,
  currentDirection: "across",
  currentClueNum: 1,
  highlightedCells: [],
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [updateCurrentCell]: (state, { payload: { index } }) =>
      produce(state, draft => {
        draft.currentCell = index;
      }),

    [updateCurrentClue]: (state, { payload: { clue } }) =>
      produce(state, draft => {
        draft.currentClueNum = clue;
      }),

    [updateHighlightedCells]: (state, { payload: { cells } }) =>
      produce(state, draft => {
        draft.highlightedCells = cells;
      }),

    [updateCurrentDirection]: (state, { payload: { direction } }) =>
      produce(state, draft => {
        draft.currentDirection = direction;
      }),
  },
  initialState
);

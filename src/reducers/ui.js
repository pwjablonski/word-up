import produce from "immer";
import { handleActions } from "redux-actions";
import {
  updateCurrentCell,
  updateCurrentClue,
  updateHighlightedCells,
  updateCurrentDirection,
  toggleTopBarMenu,
  closeTopBarMenu,
  toggleWordSelector
} from "../actions";

const initialState = {
  currentCell: 0,
  currentDirection: "across",
  currentClueNum: 1,
  highlightedCells: [],
  openTopBarMenu: null,
  wordSelectorIsOpen: false,
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
    [toggleTopBarMenu]: (state, { payload: { name } }) =>
      produce(state, draft => {
        draft.openTopBarMenu = name === draft.openTopBarMenu ? null: name;
      }),
    [closeTopBarMenu]: (state) =>
      produce(state, draft => {
        draft.openTopBarMenu = null;
      }),
    [toggleWordSelector]: (state) =>
      produce(state, draft => {
        draft.wordSelectorIsOpen = !draft.wordSelectorIsOpen;
      }),
  },
  initialState
);

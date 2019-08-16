import produce from "immer";
import { handleActions } from "redux-actions";
import {
  updateCurrentCell,
  updateCurrentClue,
  updateHighlightedCells,
  updateCurrentDirection,
  toggleTopBarMenu,
  closeTopBarMenu,
  toggleSymmetry,
  openPuzzleSelector,
  closePuzzleSelector,
  changeCurrentPuzzle,
  closeWordSelector,
  wordsLoaded,
  toggleRebusEditing,
  disableRebusEditing
} from "../actions";

const initialState = {
  currentCell: 0,
  currentDirection: "across",
  currentClueNum: 1,
  highlightedCells: [],
  openTopBarMenu: null,
  wordSelectorIsOpen: false,
  symmetryIsEnabled: true,
  puzzleSelectorIsOpen: false,
  rebusIsEnabled: false
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
        draft.openTopBarMenu = name === draft.openTopBarMenu ? null : name;
      }),
    [closeTopBarMenu]: state =>
      produce(state, draft => {
        draft.openTopBarMenu = null;
      }),
    [toggleSymmetry]: state =>
      produce(state, draft => {
        draft.symmetryIsEnabled = !draft.symmetryIsEnabled;
      }),
    [openPuzzleSelector]: state =>
      produce(state, draft => {
        draft.puzzleSelectorIsOpen = true;
      }),
    [closePuzzleSelector]: state =>
      produce(state, draft => {
        draft.puzzleSelectorIsOpen = false;
      }),
    [changeCurrentPuzzle]: state =>
      produce(state, draft => {
        draft.puzzleSelectorIsOpen = false;
      }),
    [closeWordSelector]: state =>
      produce(state, draft => {
        draft.wordSelectorIsOpen = false;
      }),
    [wordsLoaded]: state =>
      produce(state, draft => {
        draft.wordSelectorIsOpen = true;
      }),
    [toggleRebusEditing]: state =>
      produce(state, draft => {
        draft.rebusIsEnabled = !state.rebusIsEnabled;
      }),
    [disableRebusEditing]: state =>
      produce(state, draft => {
        draft.rebusIsEnabled = false;
      })
  },
  initialState
);

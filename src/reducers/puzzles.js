import produce from "immer";
import { handleActions } from "redux-actions";
import {
  puzzleCreated,
  updateCellFill,
  gridUpdated,
  authorChanged,
  titleChanged
} from "../actions";
import createEmptyPuzzle from "../util/createEmptyPuzzle"
import { clueTextChanged } from "../actions/puzzles";

const initialState = {};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [puzzleCreated]: (state, { payload: { puzzleKey } }) =>
      produce(state, draft => {
        draft[puzzleKey] = createEmptyPuzzle(puzzleKey, 15, 15);
      }),
    [updateCellFill]: (state, { payload: { currentPuzzleKey, cell, fill } }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["grid"][cell]["fill"] = fill;
      }),
    [gridUpdated]: (state, { payload: {currentPuzzleKey, grid, clues} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["grid"] = grid;
        draft[currentPuzzleKey]["clues"] = clues;
      }),
    [clueTextChanged]: (state, { payload: {currentPuzzleKey, direction, index, value} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["clues"][direction][index]["text"] = value;
      }),
    [authorChanged]: (state, { payload: {currentPuzzleKey, direction, index, value} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["author"] = value;
      }),
    [titleChanged]: (state, { payload: {currentPuzzleKey, direction, index, value} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["title"] = value;
      }),

  },
  initialState
);
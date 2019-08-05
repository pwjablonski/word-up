import produce from "immer";
import { handleActions } from "redux-actions";
import {
  puzzleCreated,
  updateCellFill,
  gridUpdated,
  authorChanged,
  titleChanged,
  puzzlesLoaded,
  clueTextChanged
} from "../actions";
import createEmptyPuzzle from "../util/createEmptyPuzzle"

const initialState = {};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [puzzleCreated]: (state, { payload: { puzzleKey } }) =>
      produce(state, draft => {
        draft[puzzleKey] = createEmptyPuzzle(puzzleKey, 15, 15);
      }),
    [updateCellFill]: (state, { payload: { currentPuzzleKey, cell, fill }, meta: {timestamp} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["grid"][cell]["fill"] = fill;
        draft[currentPuzzleKey]["updatedAt"] = timestamp
      }),
    [gridUpdated]: (state, { payload: {currentPuzzleKey, grid, clues}, meta: {timestamp} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["grid"] = grid;
        draft[currentPuzzleKey]["clues"] = clues;
        draft[currentPuzzleKey]["updatedAt"] = timestamp
      }),
    [clueTextChanged]: (state, { payload: {currentPuzzleKey, direction, index, value}, meta: {timestamp} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["clues"][direction][index]["text"] = value;
        draft[currentPuzzleKey]["updatedAt"] = timestamp
      }),
    [authorChanged]: (state, { payload: {currentPuzzleKey, value}, meta: {timestamp} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["author"] = value;
        draft[currentPuzzleKey]["updatedAt"] = timestamp
      }),
    [titleChanged]: (state, { payload: {currentPuzzleKey, value}, meta: {timestamp} }) =>
      produce(state, draft => {
        draft[currentPuzzleKey]["title"] = value;
        draft[currentPuzzleKey]["updatedAt"] = timestamp
      }),
    [puzzlesLoaded]: (state, { payload: {puzzles} }) =>
      produce(state, draft => {
        draft = {...state, ...puzzles};
        return draft
      }),

  },
  initialState
);
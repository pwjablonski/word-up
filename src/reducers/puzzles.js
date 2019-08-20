import produce from "immer";
import { handleActions } from "redux-actions";
import {
  puzzleCreated,
  fillUpdated,
  gridUpdated,
  authorChanged,
  titleChanged,
  puzzlesLoaded,
  clueTextChanged,
  // userLoggedOut,
  changeCurrentPuzzle,
  toggleCircle
} from "../actions";

import isPristinePuzzle from "../util/isPristinePuzzle";

const initialState = {};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [puzzleCreated]: (state, { payload: { puzzleKey, puzzle } }) =>
      produce(state, draft => {
        const puzzles = {};
        Object.keys(state).forEach(key => {
          if (key === puzzleKey || !isPristinePuzzle(state[key])) {
            puzzles[key] = state[key];
          }
        });
        puzzles[puzzleKey] = puzzle;
        draft = puzzles;
        return draft;
      }),
    [changeCurrentPuzzle]: (state, { payload: { puzzleKey } }) =>
      produce(state, draft => {
        const puzzles = {};
        Object.keys(state).forEach(key => {
          if (key === puzzleKey || !isPristinePuzzle(state[key])) {
            puzzles[key] = state[key];
          }
        });
        draft = puzzles;
        return draft;
      }),
    [fillUpdated]: (
      state,
      { payload: { currentPuzzleKey, cell, fill }, meta: { timestamp } }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].grid[cell].fill = fill;
        draft[currentPuzzleKey].updatedAt = timestamp;
      }),
    [gridUpdated]: (
      state,
      { payload: { currentPuzzleKey, grid, clues }, meta: { timestamp } }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].grid = grid;
        draft[currentPuzzleKey].clues = clues;
        draft[currentPuzzleKey].updatedAt = timestamp;
      }),
    [clueTextChanged]: (
      state,
      {
        payload: { currentPuzzleKey, direction, index, value },
        meta: { timestamp }
      }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].clues[direction][index].text = value;
        draft[currentPuzzleKey].updatedAt = timestamp;
      }),
    [authorChanged]: (
      state,
      { payload: { currentPuzzleKey, value }, meta: { timestamp } }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].author = value;
        draft[currentPuzzleKey].updatedAt = timestamp;
      }),
    [titleChanged]: (
      state,
      { payload: { currentPuzzleKey, value }, meta: { timestamp } }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].title = value;
        draft[currentPuzzleKey].updatedAt = timestamp;
      }),
    [puzzlesLoaded]: (state, { payload: { puzzles } }) =>
      produce(state, draft => {
        draft = { ...state, ...puzzles };
        return draft;
      }),
    [toggleCircle]: (
      state,
      { payload: { currentPuzzleKey, cell }, meta: { timestamp } }
    ) =>
      produce(state, draft => {
        draft[currentPuzzleKey].grid[cell].hasCircle = !draft[currentPuzzleKey]
          .grid[cell].hasCircle;
        draft[currentPuzzleKey].updatedAt = timestamp;
      })
    // [userLoggedOut]: (state, action) =>
    //   produce(state, draft => {
    //     // update
    //   })
  },
  initialState
);

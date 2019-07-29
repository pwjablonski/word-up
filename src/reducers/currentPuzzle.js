import produce from "immer";
import { handleActions } from "redux-actions";
import { puzzleCreated } from "../actions";

const initialState = {
  puzzleKey: null
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [puzzleCreated]: (state, { payload: { puzzleKey } }) =>
      produce(state, draft => {
        draft.puzzleKey = puzzleKey;
      }),
  },
  initialState
);


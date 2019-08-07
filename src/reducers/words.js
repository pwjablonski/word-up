import produce from "immer";
import { handleActions } from "redux-actions";
import { wordsLoaded } from "../actions";

const initialState = {
  words: []
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [wordsLoaded]: (state, { payload: { words } }) =>
      produce(state, draft => {
        draft.words = words;
      })
  },
  initialState
);

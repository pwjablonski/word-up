import produce from "immer";
import { handleActions } from "redux-actions";
import { userAuthenticated, userLoggedOut } from "../actions";

const initialState = {
  loginState: "ANONYMOUS",
  account: {}
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [userAuthenticated]: (state, { payload: { user } }) =>
      produce(state, draft => {
        draft.loginState = "AUTHENTICATED";
        draft.account = {
          id: user.uid,
          displayName: user.displayName,
          avatarUrl: user.photoURL
        };
      }),
    [userLoggedOut]: state =>
      produce(state, draft => {
        draft.loginState = "ANONYMOUS";
        draft.account = null;
      })
  },
  initialState
);

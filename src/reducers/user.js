import produce from "immer";
import { handleActions } from "redux-actions";
import {
    userAuthenticated,
} from "../actions";

const initialState = {
  loginState: "ANONYMOUS",
  account: {},
  identityProviders: {}
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [userAuthenticated]: (state, { payload: { user, credential } }) =>
      produce(state, draft => {
        draft.loginState = "AUTHENTICATED";
        draft.account = {
            id: user.uid,
            displayName: user.displayName,
            avatarUrl: user.photoURL,
        }
        draft.identityProviders['google.com'] = {
            accessToken: credential,
            displayName: user.displayName,
            avatarUrl: user.photoURL,
        }
      }),

  },
  initialState
);

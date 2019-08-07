import { createLogic } from "redux-logic";
import isNil from "lodash/isNil";

import { userAuthenticated, userLoggedOut } from "../actions";

export default createLogic({
  type: "HANDLE_AUTH_CHANGE",
  async process({ action }, dispatch, done) {
    if (isNil(action.payload.user)) {
      dispatch(userLoggedOut());
      done();
    }
    dispatch(userAuthenticated(action.payload.user));
    done();
  }
});

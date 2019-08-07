import { createLogic } from "redux-logic";
import { handleAuthChange } from "../actions";
import { auth } from "../clients/firebase";

export default createLogic({
  type: "APPLICATION_LOADED",
  warnTimeout: 0,
  // eslint-disable-next-line no-unused-vars
  async process(deps, dispatch, done) {
    auth.onAuthStateChanged(user => {
      dispatch(handleAuthChange(user));
    });
  }
});

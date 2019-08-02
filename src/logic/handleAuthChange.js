import { createLogic } from "redux-logic";
import isNil from 'lodash/isNil';

import{userAuthenticated, userLoggedOut} from '../actions'
import {getSessionUid, signOut, startSessionHeartbeat,
} from "../clients/firebase"


export default createLogic({
  type: "HANDLE_AUTH_CHANGE",
  async process({ action }, dispatch, done) {
    startSessionHeartbeat();
    if (isNil(action.payload.user)) {
      dispatch(userLoggedOut());
      done();
      return;
    }

    const sessionUid = getSessionUid();
    if (action.payload.user.uid !== sessionUid) {
      signOut();
      done();
      return;
    }

    dispatch(userAuthenticated(action.payload.user, action.payload.credential));
    done();
  }
});

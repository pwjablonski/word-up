import { createLogic } from "redux-logic";

import{handleAuthChange} from '../actions'
import {
  signIn
} from "../clients/firebase"

export default createLogic({
  type: "LOG_IN",
  async process({ action }, dispatch, done) {
    try {
        const {user, credential} = await signIn(action.payload.provider)
        dispatch(handleAuthChange(user, credential));
    } catch (e) {
        console.log(e);
    }
    done();
  }
});

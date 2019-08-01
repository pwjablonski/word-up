import { createLogic } from "redux-logic";
import{handleAuthChange} from '../actions'
import {
    signIn,
    startSessionHeartbeat
} from "../clients/firebase"

export default createLogic({
  type: "LOG_IN",
  async process({ action }, dispatch, done) {
    startSessionHeartbeat();

    try {
        const {user, credential} = await signIn(action.payload.provider)
        console.log(user, credential)
        dispatch(handleAuthChange(user, credential));
    } catch (e) {
        console.log(e);
    }
    done();
  }
});

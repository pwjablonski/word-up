import { createLogic } from "redux-logic";
import { signIn } from "../clients/firebase";

export default createLogic({
  type: "LOG_IN",
  async process({ action }, dispatch, done) {
    try {
      signIn(action.payload.provider);
    } catch (e) {
      console.log(e);
    }
    done();
  }
});

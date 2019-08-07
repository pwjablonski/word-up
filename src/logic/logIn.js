import { createLogic } from "redux-logic";
import { signIn } from "../clients/firebase";

export default createLogic({
  type: "LOG_IN",
  async process(deps, dispatch, done) {
    try {
      signIn();
    } catch (e) {
      // console.log(e);
    }
    done();
  }
});

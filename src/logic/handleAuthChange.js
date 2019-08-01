import { createLogic } from "redux-logic";
import{userAuthenticated} from '../actions'

export default createLogic({
  type: "HANDLE_AUTH_CHANGE",
  async process({ action }, dispatch, done) {
    dispatch(userAuthenticated(action.payload.user, action.payload.credential));
    done();
  }
});

import { combineReducers } from "redux";

import currentPuzzle from "./currentPuzzle";
import ui from "./ui";
import puzzles from "./puzzles";

const rootReducer = (state, action) => {
  return combineReducers({
    currentPuzzle,
    ui,
    puzzles
  })(state, action);
};

export default rootReducer;

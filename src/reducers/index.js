import { combineReducers } from "redux";

import currentPuzzle from "./currentPuzzle";
import ui from "./ui";
import puzzles from "./puzzles";
import words from "./words";
import user from "./user";

const rootReducer = (state, action) => {
  return combineReducers({
    currentPuzzle,
    ui,
    puzzles,
    words,
    user
  })(state, action);
};

export default rootReducer;

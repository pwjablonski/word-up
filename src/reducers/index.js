import { combineReducers } from "redux";

import currentPuzzle from "./currentPuzzle";
import ui from "./ui";
import puzzles from "./puzzles";
import words from "./words";

const rootReducer = (state, action) => {
  return combineReducers({
    currentPuzzle,
    ui,
    puzzles,
    words
  })(state, action);
};

export default rootReducer;

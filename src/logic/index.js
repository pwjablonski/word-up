import applicationLoaded from "./applicationLoaded";
import createPuzzle from "./createPuzzle";
import keyInputted from "./keyInputted";
import cellSelected from "./cellSelected";
import updateUI from "./updateUI";
import clueListItemClicked from "./clueListItemClicked";
import fetchWords from "./fetchWords";
import createPDF from "./createPDF";
import generatePattern from "./generatePattern";
import manageAuth from "./manageAuth";
import handleAuthChange from "./handleAuthChange";
import logIn from "./logIn";
import logOut from "./logOut";
import saveCurrentPuzzle from "./saveCurrentPuzzle";
import userAuthenticated from "./userAuthenticated";
import updateGridAndClueNums from "./updateGridAndClueNums";
import updateFill from "./updateFill";

export default [
  applicationLoaded,
  createPuzzle,
  keyInputted,
  cellSelected,
  updateFill,
  updateGridAndClueNums,
  updateUI,
  clueListItemClicked,
  fetchWords,
  createPDF,
  generatePattern,
  manageAuth,
  handleAuthChange,
  logIn,
  logOut,
  saveCurrentPuzzle,
  userAuthenticated
];

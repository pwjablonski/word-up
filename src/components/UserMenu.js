import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faUser as farUser,
  faPlusSquare
} from "@fortawesome/free-regular-svg-icons";
import {
  faUser as fasUser,
  faSignInAlt,
  faSignOutAlt,
  faFolderOpen,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import {
  logIn,
  logOut,
  openPuzzleSelector,
  createPuzzle,
  uploadPuz
} from "../actions";
import { isUserAuthenticated } from "../selectors";

export default function UserMenu() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated);
  function onStartGoogleLogIn() {
    dispatch(logIn("google"));
  }

  function onLogOut() {
    dispatch(logOut());
  }

  function onOpenPuzzleSelector() {
    dispatch(openPuzzleSelector());
  }

  function onCreateNewPuzzle() {
    dispatch(createPuzzle());
  }

  function onUploadPuz(e) {
    dispatch(uploadPuz(e.target.files));
  }

  function openFileSelector() {
    ref.current.click();
  }

  return (
    <div className="topbar-item">
      <TopbarButton name="user">
        {isAuthenticated ? (
          <FontAwesomeIcon className="" icon={fasUser} size="2x" />
        ) : (
          <FontAwesomeIcon className="" icon={farUser} size="2x" />
        )}
      </TopbarButton>
      <TopbarMenu name="user">
        {isAuthenticated ? (
          <>
            <button
              className="topbar-menu-item"
              type="button"
              onClick={onCreateNewPuzzle}
            >
              <span>New Puzzle</span>
              <FontAwesomeIcon className="" icon={faPlusSquare} size="2x" />
            </button>
            <button
              className="topbar-menu-item"
              type="button"
              onClick={openFileSelector}
            >
              <input
                className="topbar-menu-item_upload"
                type="file"
                name="file"
                id="file"
                onChange={onUploadPuz}
                ref={ref}
              />
              <span> Upload .puz </span>
              <FontAwesomeIcon className="" icon={faUpload} size="2x" />
            </button>
            <button
              className="topbar-menu-item"
              type="button"
              onClick={onOpenPuzzleSelector}
            >
              <span>Open Puzzle</span>
              <FontAwesomeIcon className="" icon={faFolderOpen} size="2x" />
            </button>
            <button
              className="topbar-menu-item"
              type="button"
              onClick={onLogOut}
            >
              <span>Log Out</span>
              <FontAwesomeIcon className="" icon={faSignOutAlt} size="2x" />
            </button>
          </>
        ) : (
          <button
            className="topbar-menu-item"
            type="button"
            onClick={onStartGoogleLogIn}
          >
            <span>Log In</span>
            <FontAwesomeIcon className="" icon={faSignInAlt} size="2x" />
          </button>
        )}
      </TopbarMenu>
    </div>
  );
}

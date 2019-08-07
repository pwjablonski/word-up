import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import { logIn, logOut } from "../actions";
import { isUserAuthenticated } from "../selectors";

export default function SettingsMenu() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated);
  function onStartGoogleLogIn() {
    dispatch(logIn("google"));
  }

  function onLogOut() {
    dispatch(logOut());
  }

  return (
    <div className="topbar-item">
      <TopbarButton name="settings">
        <FontAwesomeIcon className="" icon={faCog} size="2x" />
      </TopbarButton>
      <TopbarMenu name="settings">
        {isAuthenticated ? (
          <button className="topbar-menu-item" type="button" onClick={onLogOut}>
            Log Out
          </button>
        ) : (
          <button
            className="topbar-menu-item"
            type="button"
            onClick={onStartGoogleLogIn}
          >
            Log In
          </button>
        )}
      </TopbarMenu>
    </div>
  );
}

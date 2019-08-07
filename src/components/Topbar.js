import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import DownloadMenu from "./DownloadMenu";
import SettingsMenu from "./SettingsMenu";
import { isUserAuthenticated } from "../selectors";
import BoardLayoutMenu from "./BoardLayoutMenu";
import ToggleSymmetryButton from "./ToggleSymmetryButton";
import NewPuzzleButton from "./NewPuzzleButton";
import OpenPuzzleButton from "./OpenPuzzleButton";

export default function Topbar() {
  const userIsAuthenticated = useSelector(isUserAuthenticated);

  return (
    <div className="topbar">
      <div className="topbar-brand">WU</div>
      <div className="topbar-tools">
        {userIsAuthenticated ? (
          <>
            <NewPuzzleButton />
            <OpenPuzzleButton />
          </>
        ) : null}
        <ToggleSymmetryButton />
        <BoardLayoutMenu />
        <DownloadMenu />
        <SettingsMenu />
      </div>
    </div>
  );
}

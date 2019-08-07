import React from "react";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { openPuzzleSelector } from "../actions";

export default function DownloadMenu() {
  const dispatch = useDispatch();

  function onOpenPuzzleSelector() {
    dispatch(openPuzzleSelector());
  }

  return (
    <div className="topbar-item">
      <button
        className="topbar-button topbar-button-item"
        title="Open Puzzle"
        type="button"
        onClick={onOpenPuzzleSelector}
      >
        <FontAwesomeIcon icon={faFolderOpen} size="2x" />
      </button>
    </div>
  );
}

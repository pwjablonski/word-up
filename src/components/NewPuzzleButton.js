import React from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { createPuzzle } from "../actions";

export default function DownloadMenu() {
  const dispatch = useDispatch();

  function onCreateNewPuzzle() {
    dispatch(createPuzzle());
  }

  return (
    <div className="topbar-item">
      <button
        className="topbar-button topbar-button-item"
        title="New Puzzle"
        type="button"
        onClick={onCreateNewPuzzle}
      >
        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
      </button>
    </div>
  );
}

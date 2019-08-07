import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isNull from "lodash/isNull";
import { getCurrentPuzzle } from "../selectors";
import PuzzleLayout from "./PuzzleLayout";
import Topbar from "./Topbar";
import PuzzleSelector from "./PuzzleSelector";

export default function Puzzle() {
  const currentPuzzle = useSelector(getCurrentPuzzle);

  if (isNull(currentPuzzle)) {
    return (
      <div className="puzzle__loading">
        <FontAwesomeIcon pulse icon={faSpinner} size="2x" />
      </div>
    );
  }

  return (
    <div className="puzzle">
      <Topbar />
      <PuzzleLayout />
      <PuzzleSelector />
    </div>
  );
}

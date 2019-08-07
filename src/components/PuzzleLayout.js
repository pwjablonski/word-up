import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import Board from "./Board";
import ClueBar from "./ClueBar";
import ClueList from "./ClueList";
import PuzzleHeader from "./PuzzleHeader";
import { getClueLists } from "../selectors";

export default function PuzzleLayout() {
  const clues = useSelector(getClueLists);

  return (
    <div className="layout">
      <div className="layout-left">
        <PuzzleHeader />
        <Board />
      </div>
      <div className="layout-right">
        <ClueBar />
        <div className="cluelists">
          <ClueList clues={clues.across} direction="across" />
          <ClueList clues={clues.down} direction="down" />
        </div>
      </div>
    </div>
  );
}

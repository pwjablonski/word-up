import React from "react";
import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import Cell from "./Cell";
import { cellSelected, keyInputted } from "../actions";

import {
  getCurrentPuzzleGrid,
  getCurrentCell,
  getHighlightedCells
} from "../selectors";

export default function Board() {
  const dispatch = useDispatch();
  const grid = useSelector(getCurrentPuzzleGrid);
  const currentCell = useSelector(getCurrentCell);
  const highlightedCells = useSelector(getHighlightedCells);

  function onCellSelected(i) {
    dispatch(cellSelected(i));
  }

  function onInput(e) {
    dispatch(keyInputted(e.key));
    e.preventDefault();
  }

  return (
    <svg
      className="board"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin meet"
      tabIndex={0}
      onKeyDown={onInput}
    >
      <g className="cells">
        {grid.map(cellData => {
          const isSelected = currentCell === cellData.index;
          const isHighlighted = highlightedCells.includes(cellData.index);

          return (
            <Cell
              cellData={cellData}
              isSelected={isSelected}
              isHighlighted={isHighlighted}
              key={cellData.index}
              onCellSelected={onCellSelected}
            />
          );
        })}
      </g>
    </svg>
  );
}

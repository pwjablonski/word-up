import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";

import {
  getCurrentClueNum,
  getCurrentDirection,
  getHighlightedLetters
} from "../selectors";

export default function ClueBar() {
  const clueNum = useSelector(getCurrentClueNum);
  const letters = useSelector(getHighlightedLetters);
  const currentDirection = useSelector(getCurrentDirection);
  let num;
  if (clueNum) {
    const letter = currentDirection === "across" ? "A" : "D";
    num = `${clueNum}${letter}`
  }

  return (
    <div className="cluebar">
      <div className="cluebar-number">{num}</div>
      <div className="cluebar-fill">{letters}</div>
    </div>
  );
}

import React from "react";
import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import WordSelector from "./WordSelector";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toggleWordSelector} from '../actions'

import {
  getCurrentClueNum,
  getCurrentDirection,
  getHighlightedLetters,
  isWordSelectorOpen
} from "../selectors";

export default function ClueBar() {
  const dispatch = useDispatch();
  const clueNum = useSelector(getCurrentClueNum);
  const letters = useSelector(getHighlightedLetters);
  const currentDirection = useSelector(getCurrentDirection);
  const wordSelectorIsOpen = useSelector(isWordSelectorOpen);

  let num;
  if (clueNum) {
    const letter = currentDirection === "across" ? "A" : "D";
    num = `${clueNum}${letter}`
  }

  function onToggleWordSelector(){
    dispatch(toggleWordSelector())
  }

  return (
    <div className="cluebar">
      <div className="cluebar-row">
        <div className="cluebar-clue">
          <div className="cluebar-number">{num}</div>
          <div className="cluebar-fill">{letters}</div>
        </div>
        {
          wordSelectorIsOpen ? 
            <FontAwesomeIcon
            onClick={onToggleWordSelector}
            className="cluebar-arrow"
            icon={faChevronUp}
            /> :
            <FontAwesomeIcon
              onClick={onToggleWordSelector}
              className="cluebar-arrow"
              icon={faChevronDown}
            /> 
        }
      </div>
      <WordSelector/> 
    </div>
  );
}

import React from "react";
import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import WordSelector from "./WordSelector";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {searchWord, closeWordSelector} from '../actions'

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

  function onSearchWord(){
    dispatch(searchWord())
  }

  function onCloseWordSelector(){
    dispatch(closeWordSelector())
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
            onClick={onCloseWordSelector}
            className="cluebar-arrow"
            icon={faChevronUp}
            /> :
            <FontAwesomeIcon
              onClick={onSearchWord}
              className="cluebar-arrow"
              icon={faSearch}
            /> 
        }
      </div>
      <WordSelector/> 
    </div>
  );
}

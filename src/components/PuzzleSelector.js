import React from "react";
import "../css/App.css";
import classnames from "classnames";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  isPuzzleSelectorOpen,
  getPuzzles,
  getCurrentPuzzleKey
} from "../selectors";
import { closePuzzleSelector, changeCurrentPuzzle } from "../actions";
import Modal from "./Modal";

export default function WordSelector() {
  const dispatch = useDispatch();
  const currentPuzzleKey = useSelector(getCurrentPuzzleKey);
  const isOpen = useSelector(isPuzzleSelectorOpen);
  const puzzles = useSelector(getPuzzles);

  function onClosePuzzleSelector() {
    dispatch(closePuzzleSelector());
  }

  function onChangeCurrentPuzzle(key) {
    dispatch(changeCurrentPuzzle(key));
  }

  if (!isOpen) {
    return null;
  }
  return (
    <Modal isOpen={isOpen}>
      <div className="modal__text">
        <p>Choose your Puzzle</p>
      </div>
      <div className="puzzle-selector">
        {Object.keys(puzzles).map(key => {
          return (
            <button
              key={puzzles[key].puzzleKey}
              className={classnames("puzzle-selector-item", {
                "puzzle-selector-item-active": key === currentPuzzleKey
              })}
              type="button"
              onClick={() => onChangeCurrentPuzzle(puzzles[key].puzzleKey)}
            >
              <span>{puzzles[key].title}</span>
              <span>
                {puzzles[key].updatedAt
                  ? moment(puzzles[key].updatedAt).fromNow()
                  : null}
              </span>
            </button>
          );
        })}
      </div>
      <button
        className="modal__button"
        type="button"
        onClick={onClosePuzzleSelector}
      >
        Close
      </button>
    </Modal>
  );
}

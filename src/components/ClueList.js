import React from "react";
import "../css/App.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ContentEditable from "react-contenteditable";
import { clueListItemClicked, clueTextChanged } from "../actions";
import {
  getCurrentPuzzleKey,
  getCurrentClueNum,
  getCurrentDirection
} from "../selectors";

export default function ClueList({ clues, direction }) {
  const dispatch = useDispatch();
  const currentPuzzleKey = useSelector(getCurrentPuzzleKey);
  const currentClueNum = useSelector(getCurrentClueNum);
  const currentDirection = useSelector(getCurrentDirection);

  function onClueListItemClicked(clueNum) {
    dispatch(clueListItemClicked(clueNum, direction));
  }

  function handleChange(e, i) {
    dispatch(clueTextChanged(currentPuzzleKey, direction, i, e.target.value));
  }
  return (
    <div className="cluelist">
      <h3 className="cluelist-title">{direction}</h3>
      <ol className="cluelist-list">
        {clues.map((clue, i) => {
          return (
            <button
              className={classnames("clue", {
                "clue-selected":
                  currentClueNum === clue.clueNum &&
                  currentDirection === direction
              })}
              key={clue.clueNum}
              type="button"
              onClick={() => onClueListItemClicked(clue.clueNum)}
            >
              <div className="clue-text">
                <span>{clue.clueNum}. </span>
                <ContentEditable
                  html={clue.text}
                  onChange={e => handleChange(e, i)}
                  tagName="span"
                />
              </div>
            </button>
          );
        })}
      </ol>
    </div>
  );
}

ClueList.propTypes = {
  clues: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired
};

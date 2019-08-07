import React from "react";
import "../css/App.css";
import ContentEditable from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPuzzleTitle,
  getCurrentPuzzleAuthor,
  getCurrentPuzzleKey
} from "../selectors";
import { titleChanged, authorChanged } from "../actions";

export default function PuzzleHeader() {
  const dispatch = useDispatch();
  const author = useSelector(getCurrentPuzzleAuthor);
  const title = useSelector(getCurrentPuzzleTitle);
  const currentPuzzleKey = useSelector(getCurrentPuzzleKey);

  function handleTitleChange(e) {
    dispatch(titleChanged(currentPuzzleKey, e.target.value));
  }

  function handleAuthorChange(e) {
    dispatch(authorChanged(currentPuzzleKey, e.target.value));
  }

  return (
    <div className="puzzle-header">
      <div className="puzzle-header-title">
        <ContentEditable
          html={title}
          onChange={handleTitleChange}
          tagName="span"
        />
      </div>
      <div className="puzzle-header-author">
        <span className="puzzle-header-by">By </span>
        <ContentEditable
          html={author}
          onChange={handleAuthorChange}
          tagName="span"
        />
      </div>
    </div>
  );
}

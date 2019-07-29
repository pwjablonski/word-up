import React from "react";
import "../css/App.css";
import ContentEditable from 'react-contenteditable'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPuzzleTitle,
  getCurrentPuzzleAuthor,
  getCurrentPuzzleKey
} from "../selectors";
import {
  titleChanged,
  authorChanged
} from "../actions";

export default function Topbar() {
  const dispatch = useDispatch();
  const author = useSelector(getCurrentPuzzleAuthor);
  const title = useSelector(getCurrentPuzzleTitle);
  const currentPuzzleKey = useSelector(getCurrentPuzzleKey);

  function handleTitleChange(e){
    dispatch(titleChanged(currentPuzzleKey, e.target.value));
  }

  function handleAuthorChange(e){
    dispatch(authorChanged(currentPuzzleKey, e.target.value));
  }

  return (
    <div className="topbar">
      <div className="topbar-puzzle-info"> 
        <div className="topbar-puzzle-info-tittle">
          <ContentEditable
            html={title}
            onChange={handleTitleChange}
            tagName='span'
          />
        </div>
        <div className="topbar-puzzle-author">
        <span>By </span>
          <ContentEditable
            html={author}
            onChange={handleAuthorChange}
            tagName='span'
          />
        </div>
      </div>
      <div className="topbar-tools">
        <div className="topbar-button topbar-button-item">
          <FontAwesomeIcon
            className=""
            icon={faCog}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

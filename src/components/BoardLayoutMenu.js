import React from "react";
import { useDispatch } from "react-redux";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { faDelicious } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import { generatePattern } from "../actions";

export default function BoardLayoutMenu() {
  const dispatch = useDispatch();

  function onGeneratePattern() {
    dispatch(generatePattern());
  }
  return (
    <div className="topbar-item">
      <TopbarButton name="board-layout">
        <FontAwesomeIcon className="" icon={faDelicious} size="2x" />
      </TopbarButton>
      <TopbarMenu name="board-layout">
        <button
          className="topbar-menu-item"
          type="button"
          onClick={onGeneratePattern}
        >
          <FontAwesomeIcon icon={faChessBoard} size="2x" />
          <span> Generate Pattern </span>
        </button>
      </TopbarMenu>
    </div>
  );
}

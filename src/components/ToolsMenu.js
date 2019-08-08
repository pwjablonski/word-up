import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  faChessBoard,
  faTools,
  faYinYang
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import { generatePattern, toggleSymmetry } from "../actions";
import { isSymmetryEnabled } from "../selectors";

export default function ToolsMenu() {
  const dispatch = useDispatch();
  const symmetryIsEnabled = useSelector(isSymmetryEnabled);

  function onGeneratePattern() {
    dispatch(generatePattern());
  }

  function onToggleSymmetry() {
    dispatch(toggleSymmetry());
  }

  return (
    <div className="topbar-item">
      <TopbarButton name="tools">
        <FontAwesomeIcon className="" icon={faTools} size="2x" />
      </TopbarButton>
      <TopbarMenu name="tools">
        <button
          className={classnames("topbar-menu-item", {
            "topbar-menu-item-active": symmetryIsEnabled
          })}
          type="button"
          onClick={onToggleSymmetry}
        >
          <span> Symmetry </span>
          <FontAwesomeIcon icon={faYinYang} size="2x" />
        </button>
        <button
          className="topbar-menu-item"
          type="button"
          onClick={onGeneratePattern}
        >
          <span> Random Grid </span>
          <FontAwesomeIcon icon={faChessBoard} size="2x" />
        </button>
      </TopbarMenu>
    </div>
  );
}

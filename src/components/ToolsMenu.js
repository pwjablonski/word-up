import React from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  faChessBoard,
  faTools,
  faYinYang,
  faFont
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import {
  generatePattern,
  toggleSymmetry,
  toggleCircle,
  toggleRebusEditing
} from "../actions";
import {
  isSymmetryEnabled,
  getCurrentPuzzleKey,
  getCurrentCell,
  isRebusEnabled
} from "../selectors";

export default function ToolsMenu() {
  const dispatch = useDispatch();
  const symmetryIsEnabled = useSelector(isSymmetryEnabled);
  const currentPuzzleKey = useSelector(getCurrentPuzzleKey);
  const currentCell = useSelector(getCurrentCell);
  const rebusIsEnabled = useSelector(isRebusEnabled);

  function onGeneratePattern() {
    dispatch(generatePattern());
  }

  function onToggleSymmetry() {
    dispatch(toggleSymmetry());
  }

  function onToggleCircle() {
    dispatch(toggleCircle(currentPuzzleKey, currentCell));
  }

  function onToggleRebusEditing() {
    dispatch(toggleRebusEditing());
  }

  return (
    <div className="topbar-item">
      <TopbarButton name="tools">
        <FontAwesomeIcon className="" icon={faTools} size="2x" />
      </TopbarButton>
      <TopbarMenu name="tools">
        <button
          className={classnames("topbar-menu-item", {
            "topbar-menu-item-active": rebusIsEnabled
          })}
          type="button"
          onClick={onToggleRebusEditing}
        >
          <span> Rebus </span>
          <FontAwesomeIcon icon={faFont} size="2x" />
        </button>
        <button
          className="topbar-menu-item"
          type="button"
          onClick={onToggleCircle}
        >
          <span> Circle </span>
          <FontAwesomeIcon icon={faCircle} size="2x" />
        </button>
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

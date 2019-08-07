import React from "react";
import classnames from "classnames";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { isSymmetryEnabled } from "../selectors";
import { toggleSymmetry } from "../actions";

export default function DownloadMenu() {
  const dispatch = useDispatch();
  const symmetryIsEnabled = useSelector(isSymmetryEnabled);
  function onToggleSymmetry() {
    dispatch(toggleSymmetry());
  }

  return (
    <div className="topbar-item">
      <button
        className={classnames("topbar-button", {
          "topbar-button-active": symmetryIsEnabled
        })}
        title="Toggle Symmetry"
        type="button"
        onClick={onToggleSymmetry}
      >
        <FontAwesomeIcon icon={faYinYang} size="2x" />
      </button>
    </div>
  );
}

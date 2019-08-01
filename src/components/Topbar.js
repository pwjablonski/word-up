import React from "react";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import SettingsMenu from "./SettingsMenu";
import DownloadMenu from "./DownloadMenu";
import {faDelicious} from '@fortawesome/free-brands-svg-icons';
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classnames from "classnames";
import {
  generatePattern,
  toggleSymmetry
} from '../actions';
import {
  isSymmetryEnabled
} from '../selectors'

export default function Topbar() {
  const dispatch = useDispatch();
  const symmetryIsEnabled = useSelector(isSymmetryEnabled);
 
  function onGeneratePattern(){
    dispatch(generatePattern());
  }

  function onToggleSymmetry(){
    dispatch(toggleSymmetry());
  }

  return (
    <div className="topbar">
      <div className="topbar-brand"> 
          WU
      </div>
      <div className="topbar-tools">
        <div 
          className="topbar-button topbar-button-item"
          title="Generate Random Pattern"
          onClick={onGeneratePattern}
        >
          <FontAwesomeIcon icon={faDelicious} size="2x"/> 
        </div>
        <div 
          className={classnames(
            "topbar-button",
            "topbar-button-item",
            {"topbar-button-item-active": symmetryIsEnabled}
          )}
          title="Toggle Symmetry"
          onClick={onToggleSymmetry}
        >
          <FontAwesomeIcon icon={faYinYang} size="2x"/> 
        </div>
        <DownloadMenu/>
        <SettingsMenu/>
      </div>
    </div>
  );
}

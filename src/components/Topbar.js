import React from "react";
import "../css/App.css";
import { useDispatch } from "react-redux";
import SettingsMenu from "./SettingsMenu";
import DownloadMenu from "./DownloadMenu";
import {faDelicious} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  generatePattern,
} from '../actions';

export default function Topbar() {
  const dispatch = useDispatch();
 
  function onGeneratePattern(){
    dispatch(generatePattern());
  }


  return (
    <div className="topbar">
      <div className="topbar-brand"> 
          WU
      </div>
      <div className="topbar-tools">
        <div 
          className="topbar-button topbar-button-item"
          onClick={onGeneratePattern}
        >
          <FontAwesomeIcon icon={faDelicious} size="2x"/> 
        </div>
        <DownloadMenu/>
        <SettingsMenu/>
      </div>
    </div>
  );
}

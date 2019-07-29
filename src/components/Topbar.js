import React from "react";
import "../css/App.css";
import ContentEditable from 'react-contenteditable'
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-brand"> 
          WU
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

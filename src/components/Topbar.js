import React from "react";
import "../css/App.css";
import SettingsMenu from "./SettingsMenu";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-brand"> 
          WU
      </div>
      <div className="topbar-tools">
        <SettingsMenu/>
      </div>
    </div>
  );
}

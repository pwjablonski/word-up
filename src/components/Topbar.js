import React from "react";
import "../css/App.css";
import DownloadMenu from "./DownloadMenu";
import UserMenu from "./UserMenu";
import ToolsMenu from "./ToolsMenu";
import Wordmark from "../static/wordmark.svg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-brand">
        <img className="topbar-wordmark" src={Wordmark} alt="logo" />
      </div>
      <div className="topbar-tools">
        <DownloadMenu />
        <ToolsMenu />
        <UserMenu />
      </div>
    </div>
  );
}

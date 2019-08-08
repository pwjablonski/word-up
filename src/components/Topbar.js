import React from "react";
import "../css/App.css";
import DownloadMenu from "./DownloadMenu";
import UserMenu from "./UserMenu";
import ToolsMenu from "./ToolsMenu";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-brand">WU</div>
      <div className="topbar-tools">
        <DownloadMenu />
        <ToolsMenu />
        <UserMenu />
      </div>
    </div>
  );
}

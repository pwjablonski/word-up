import React from "react";
import { faDownload, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import TopbarButton from "./TopbarButton";
import TopbarMenu from "./TopbarMenu";
import { createPDF } from "../actions";

export default function DownloadMenu() {
  const dispatch = useDispatch();

  function onCreatePDF() {
    dispatch(createPDF());
  }

  return (
    <div className="topbar-item">
      <TopbarButton name="download">
        <FontAwesomeIcon className="" icon={faDownload} size="2x" />
      </TopbarButton>
      <TopbarMenu name="download">
        <button
          className="topbar-menu-item"
          type="button"
          onClick={onCreatePDF}
        >
          <span>NYTimes</span>
          <FontAwesomeIcon icon={faNewspaper} size="2x" />
        </button>
      </TopbarMenu>
    </div>
  );
}

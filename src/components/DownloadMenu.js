import React from 'react';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TopbarMenu from './TopbarMenu';
import TopbarMenuItems from './TopbarMenuItems';
import { useDispatch } from "react-redux";
import {
  createPDF
} from '../actions';

export default function DownloadMenu() {
  const dispatch = useDispatch();
  
  function onCreatePDF(){
    dispatch(createPDF());
  }

  return (
    <>
        <TopbarMenu name="download">
            <FontAwesomeIcon
            className=""
            icon={faDownload}
            size="2x"
            /> 
            <TopbarMenuItems name="download">
               <button
                className="topbar-menu-item"
                onClick={onCreatePDF}
                >
                  <FontAwesomeIcon icon={faNewspaper} size="2x"/> 
                  <span>NYTimes</span>
               </button>
            </TopbarMenuItems>
        </TopbarMenu>
    </>
  )
}

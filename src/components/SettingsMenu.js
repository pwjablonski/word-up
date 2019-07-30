import React from 'react';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TopbarMenu from './TopbarMenu';
import TopbarMenuItems from './TopbarMenuItems';

export default function SettingsMenu() {

  return (
    <>
        <TopbarMenu name="settings">
            <FontAwesomeIcon
            className=""
            icon={faCog}
            size="2x"
            />       
            <TopbarMenuItems name="settings">
               <button className="topbar-menu-item">Log In</button>
            </TopbarMenuItems>
        </TopbarMenu>
    </>
  )
}

import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TopbarMenu from './TopbarMenu';
import TopbarMenuItems from './TopbarMenuItems';
import {logIn, logOut} from '../actions'
import {isUserAuthenticated} from '../selectors'

export default function SettingsMenu() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated)
  function onStartGoogleLogIn() {
    dispatch(logIn('google'));
  }

  function onLogOut() {
    dispatch(logOut());
  }

  return (
    <>
        <TopbarMenu name="settings">
            <FontAwesomeIcon
            className=""
            icon={faCog}
            size="2x"
            />       
            <TopbarMenuItems name="settings">
              {
                isAuthenticated ?
                  <button
                      className="topbar-menu-item"
                      onClick={onLogOut}
                    >
                    Log Out
                  </button>
                  :
                  <button
                    className="topbar-menu-item"
                    onClick={onStartGoogleLogIn}
                  >
                    Log In
                  </button>
              }
            </TopbarMenuItems>
        </TopbarMenu>
    </>
  )
}

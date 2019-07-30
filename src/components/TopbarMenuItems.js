/* eslint-disable react/no-multi-comp */
import React from 'react';
import { useSelector } from "react-redux";

import {getOpenTopBarMenu} from '../selectors';

export default function TopbarMenuItems({
  children,
  name,
}) {
    const isOpen = useSelector(getOpenTopBarMenu) === name;
    
    if(!isOpen) {
      return null;
    }

    return(
      <div className="topbar-menu">
          {children}
      </div>
    )
}
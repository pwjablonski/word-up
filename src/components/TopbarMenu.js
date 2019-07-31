/* eslint-disable react/no-multi-comp */
import React, {useRef} from 'react';
import { useDispatch } from "react-redux";

import {
  toggleTopBarMenu,
  // closeTopBarMenu
} from '../actions';
// import useOutsideClick from "../customHooks/useOutsideClick";


export default function TopbarMenu({
  name,
  children,
}) {
    const dispatch = useDispatch();
    const ref = useRef();

    // useOutsideClick(ref, () => {
    //   dispatch(closeTopBarMenu());
    // });

    function onToggle() {
        dispatch(toggleTopBarMenu(name));
    }

    return(
      <div 
        className="topbar-button topbar-button-item"
        onClick={onToggle}
        ref={ref}
      >
          {children}
      </div>
    )
}
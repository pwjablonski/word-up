/* eslint-disable react/no-multi-comp */
import React, {useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getOpenTopBarMenu} from '../selectors';
import classnames from "classnames";

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
    const isOpen = useSelector(getOpenTopBarMenu) === name;
    // useOutsideClick(ref, () => {
    //   dispatch(closeTopBarMenu());
    // });

    function onToggle() {
        dispatch(toggleTopBarMenu(name));
    }

    return(
      <div 
        className={classnames(
          "topbar-button",
          "topbar-button-item",
          {"topbar-button-item-active": isOpen}
        )}
        onClick={onToggle}
        ref={ref}
      >
          {children}
      </div>
    )
}
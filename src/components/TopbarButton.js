/* eslint-disable react/no-multi-comp */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { getOpenTopBarMenu } from "../selectors";
import { toggleTopBarMenu } from "../actions";

export default function TopbarButton({ name, children }) {
  const dispatch = useDispatch();
  const ref = useRef();
  const isOpen = useSelector(getOpenTopBarMenu) === name;

  function onToggle() {
    dispatch(toggleTopBarMenu(name));
  }

  return (
    <button
      className={classnames("topbar-button", {
        "topbar-button-active": isOpen
      })}
      type="button"
      onClick={onToggle}
      ref={ref}
    >
      {children}
    </button>
  );
}

TopbarButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

/* eslint-disable react/no-multi-comp */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { getOpenTopBarMenu } from "../selectors";

export default function TopbarMenu({ children, name }) {
  const isOpen = useSelector(getOpenTopBarMenu) === name;

  if (!isOpen) {
    return null;
  }

  return <div className="topbar-menu">{children}</div>;
}

TopbarMenu.propTypes = {
  // children: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

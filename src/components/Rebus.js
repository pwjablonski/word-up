import React from "react";
// import PropTypes from "prop-types";
import "../css/App.css";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentCellData, isRebusEnabled } from "../selectors";
import { updateFill, disableRebusEditing } from "../actions";

export default function Rebus() {
  const dispatch = useDispatch();
  const rebusIsEnabled = useSelector(isRebusEnabled);
  const { fill, index } = useSelector(getCurrentCellData);
  const xOffset = 3 + 35.9 * (index % 15);
  const yOffset = 63 + 35.9 * Math.floor(index / 15);

  if (!rebusIsEnabled) {
    return null;
  }

  function handleBlur() {
    dispatch(disableRebusEditing());
  }

  function handleChange(e) {
    if (e.nativeEvent.inputType === "insertText") {
      dispatch(updateFill(e.target.value.toUpperCase()));
    } else if (e.type === "input" && e.nativeEvent.inputType !== "insertText") {
      dispatch(disableRebusEditing());
    }
  }

  return (
    <ContentEditable
      className="rebus"
      style={{
        height: "30px",
        minWidth: "30px",
        top: yOffset,
        left: xOffset
      }}
      html={fill}
      onChange={handleChange}
      onBlur={handleBlur}
      tagName="span"
    />
  );
}

Rebus.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // cellData: PropTypes.object.isRequired,
};

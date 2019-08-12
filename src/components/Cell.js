import React from "react";
import PropTypes from "prop-types";
import "../css/App.css";
import classnames from "classnames";

export default function Cell({
  cellData,
  isHighlighted,
  isSelected,
  onCellSelected
}) {
  const { index, fill, clueNum } = cellData;
  const xOffset = 33 * (index % 15);
  const yOffset = 33 * Math.floor(index / 15);
  const isBlack = fill === ".";

  return (
    <g onClick={() => onCellSelected(index)}>
      <rect
        x={3 + xOffset}
        y={3 + yOffset}
        width="33.00"
        height="33.00"
        className={classnames(
          "cell",
          { "cell-selected": isSelected },
          { "cell-black": isBlack },
          { "cell-highlighted": isHighlighted },
          { "cell-black-selected": isBlack && isSelected }
        )}
      />
      {cellData.hasCircle ? (
        <circle
          cx={3 + 16.5 + xOffset}
          cy={3 + 16.5 + yOffset}
          r="15.0"
          fill="none"
          stroke="black"
        />
      ) : null}
      <text
        x={5 + xOffset}
        y={14.5 + yOffset}
        textAnchor="start"
        fontSize="11.00"
      >
        {clueNum}
      </text>
      <text
        x={19.5 + xOffset}
        y={33.25 + yOffset}
        textAnchor="middle"
        fontSize={22 - fill.length * 2.5}
      >
        {fill !== "." ? fill : null}
      </text>
    </g>
  );
}

Cell.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cellData: PropTypes.object.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onCellSelected: PropTypes.func.isRequired
};

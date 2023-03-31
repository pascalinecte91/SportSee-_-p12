import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

/**
 * Component React to customize the Activity barChart cursor displayed on hover
 * @component
 */
const BarChartCursor = ({ x, y, width, height }) => {
	return <Rectangle fill="rgba(196, 196, 196, 0.5)" x={x + width / 4} y={y} width={width / 2} height={height} />;
};

BarChartCursor.propTypes = {
	/**
	 * Recharts props value for 'x' coordinate, calculated internally by Recharts
	 */
	x: PropTypes.number,
	/**
	 * Recharts props value for 'y' coordinate, calculated internally by Recharts
	 */
	y: PropTypes.number,
	/**
	 * Recharts props value for width category, calculated internally by Recharts
	 */
	width: PropTypes.number,
	/**
	 * Recharts props value for height category, calculated internally by Recharts
	 */
	height: PropTypes.number,
};

export default BarChartCursor;

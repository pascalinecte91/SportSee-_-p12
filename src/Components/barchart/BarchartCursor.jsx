import React from "react";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";


//* pas de retour apres le return sinon interprete en "undefined"

/**
 * @param {*} { x, y, width, height }
 * @return {*} 
 */
const BarChartCursor = ({ x, y, width, height }) => {
	return <Rectangle fill="rgba(196, 196, 196, 0.5)" x={x + width / 4} y={y} width={width / 2} height={height} />;
};


BarChartCursor.propTypes = {
	x: PropTypes.number,
	y: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default BarChartCursor;

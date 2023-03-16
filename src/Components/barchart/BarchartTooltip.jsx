import React from "react";
import PropTypes from "prop-types";

/**
 * Component React to customize the Activity bar chart tooltip displayed on hover
 * @component
 */
const BarChartTooltip = ({ payload }) => {
	return (
		<ul className="barChart__tooltip">
			{payload.map((entry, index) => (
				<li key={`itemTooltip-${index}`}>
					{entry.value}
					{entry.unit.toLowerCase()}
				</li>
			))}
		</ul>
	);
};

BarChartTooltip.propTypes = {
	/**
	 * Recharts props value containing user's activity data used for the bar chart and internally formatted by Recharts
	 */
	payload: PropTypes.array,
};

export default BarChartTooltip;

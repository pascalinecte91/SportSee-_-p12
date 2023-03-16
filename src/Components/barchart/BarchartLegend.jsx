import React from "react";
import PropTypes from "prop-types";

/**
 * Component React to customize the Activity bar chart legend
 * @component
 */
const BarChartLegend = ({ payload }) => {
	return (
		<section className="barChartL">
			<h2>Activité quotidienne</h2>
			<ul className="barChartL__activity">
				{payload.map((entry, index) => (
					<li key={`itemLegend-${index}`}>
						{entry.dataKey === "kilogram" ? (
							<span className="barChartL__kilogram"></span>
						) : (
							<span className="barChartL__calories"></span>
						)}
						{entry.value}
					</li>
				))}
			</ul>
		</section>
	);
};

BarChartLegend.propTypes = {
	/**
	 * Recharts props value containing user's activity data used for the bar chart and internally formatted by Recharts
	 */
	payload: PropTypes.array,
};

export default BarChartLegend;

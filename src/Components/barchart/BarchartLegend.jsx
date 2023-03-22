import React from "react";
import PropTypes from "prop-types";


const BarChartLegend = ({ payload }) => {
	return (
		<section className="barChart">
			<h2>Activité quotidienne</h2>
			<ul className="barChart__legend">
				{payload.map((entry, index) => (
					<li key={`elementLegend-${index}`}>
						{entry.dataKey === "kilogram" ? (
							<span className="barChart__kg"></span>
						) : (
							<span className="barChart__cal"></span>
						)}
						{entry.value}
					</li>
				))}
			</ul>
		</section>
	);
};

BarChartLegend.propTypes = {
	payload: PropTypes.array,
};

export default BarChartLegend;

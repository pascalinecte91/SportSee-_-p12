import React from "react";
import PropTypes from "prop-types";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import BarChartLegend from "BarChartLegend";
import BarChartTooltip from "BarChartTooltip";
import BarChartCursor from "BarChartCursor";

/**
 * Component React for display the bar chart showing activity statistics of user
 * @component
 */
const BarChartActivity = ({ dataActivity }) => {

	let minWeight = dataActivity[0].kilogram;
	let maxWeight = dataActivity[dataActivity.length - 1].kilogram;
	let middleWeight = minWeight + (maxWeight - minWeight) / 2;

	return (
		<section className="barChartA">
			<ResponsiveContainer width="100%" height={320}>
				<BarChart
					data={dataActivity}
					barSize={7}
					barGap={8}
					reverseStackOrder={true}
					margin={{ top: 15, right: 40, bottom: 30, left: 40 }}
				>
					<Legend verticalAlign="top" iconSize={8} content={<BarChartLegend />} />
					<CartesianGrid vertical={false} strokeDasharray="2 2" stroke={"#DEDEDE"} />
					<XAxis
						dataKey="dayFormatted"
						type="number"
						tickCount={dataActivity.length}
						domain={["dataMin", "dataMax"]}
						tickSize={0}
						dy={20}
						fontSize={14}
						tick={{ fill: "#9B9EAC" }}
						textAnchor="middle"
						stroke="#DEDEDE"
						padding={{ left: 11, right: 11 }}
					/>
					<YAxis
						type="number"
						dataKey="kilogram"
						yAxisId="right"
						orientation="right"
						domain={["dataMin", "dataMax"]}
						tickCount={3}
						tickSize={0}
						ticks={[minWeight - 1, middleWeight, maxWeight + 1]}
						axisLine={false}
						dx={50}
						tick={{ fill: "#9B9EAC" }}
						fontSize={14}
						textAnchor="middle"
					/>
					<YAxis
						type="number"
						dataKey="calories"
						yAxisId="left"
						orientation="left"
						tickCount={3}
						domain={["dataMin - 50", (dataMax) => dataMax + 50]}
						hide={true}
					/>
					<Tooltip
						content={<BarChartTooltip />}
						offset={35}
						wrapperStyle={{ outline: "none", top: "-100px" }}
						allowEscapeViewBox={{ x: false, y: true }}
						isAnimationActive={false}
						cursor={<BarChartCursor />}
					/>
					<Bar
						dataKey="calories"
						yAxisId="left"
						fill="#E60000"
						unit={"Kcal"}
						name={"Calories brûlées (KCal)"}
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey="kilogram"
						yAxisId="right"
						fill="#282D30"
						unit={"kg"}
						name={"Poids (kg)"}
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</section>
	);
};

BarChartActivity.propTypes = {
	dataActivity: PropTypes.array,
};

export default BarChartActivity;

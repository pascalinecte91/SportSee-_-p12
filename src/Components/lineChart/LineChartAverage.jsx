import React from "react";
import { PropTypes } from "prop-types";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,Legend,CartesianGrid,Rectangle,
} from "recharts";


const legendAverage = () => {
	return <p style={{ width: "160px", color: "white", opacity: "0.5" }}>Durée moyenne des sessions</p>;
};

/**
 *
 *
 * @param {*} { points }
 * @return {*} 
 */


const CustomCursor = ({ points }) => {
	return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={98} height={300} />;
};

/* const CustomizedCursor = ({ points }) => {
	const xPos = points[0].x;
	return <rect x={xPos} y={0} width={"100%"} height={"100%"} fill="rgba(0, 0, 0, 0.1)" />;
}; */

 const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div
					style={{
						background: "white",
						fontSize: 10,
						fontWeight: 500,
						textAlign: "center",
						padding: 10,
					}}
				>
					<p>{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
 };


const LineChartAverage = ({ dto }) => {
  console.log(dto);
	return (
		<div className="linearChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<LineChart
					width={300}
					height={300}
					data={dto.data}
					margin={{
						top: 80,
						right: 30,
						left: 20,
						bottom: 10,
					}}
					style={{ background: "#FF0000", borderRadius: "5px" }}
				>
					<CartesianGrid vertical={false} horizontal={false} />
					<defs>
						<linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4032} />
							<stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="day"
						dy={10}
						tickLine={false}
						axisLine={false}
						tick={{ fill: "white", opacity: "0.5" }}
					/>
					<YAxis dataKey="sessionLength" domain={["dataMin - 10", "dataMax"]} hide />

				 <Tooltip 
				 content={<CustomTooltip />} 
				 cursor={<CustomCursor />} />
				 
					<Line
						type="natural"
						dataKey="sessionLength"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 3, stroke: "white" }}
						stroke="url(#colorUv)"
					/>
					<Legend
						wrapperStyle={{
							margin: "-3rem 1rem",
						}}
						fontWeight={500}
						verticalAlign="top"
						align="left"
						content={legendAverage}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

LineChartAverage.propTypes = {	
	dto: PropTypes.object,
};

CustomTooltip.propTypes = {
	active: PropTypes.array.isRequired,
	payload: PropTypes.array.isRequired,
};

CustomCursor.propTypes = {	
	points: PropTypes.array.isRequired,
};


export default LineChartAverage;

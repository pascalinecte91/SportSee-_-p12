import React from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid, Rectangle} from "recharts";


const showLegend = () => {
	return <p style={{ width: "120px", color: "white", opacity: "0.5" }}>Durée moyenne des sessions</p>;
};

const CustomCursor = ({ points }) => {
	console.log(points);
	return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={98} height={300} />;
};

/********************************************************************** */


const CustomSessionsTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					color: "black",
					backgroundColor: "white",
					lineHeight: "25px",
					textAlign: "center",
					width: "39px",
					height: "25px",
					fontSize: "8px",
					marginLeft: "7px",
				}}
				className="custom__sessions">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};


const LineChartSessions = ({ dataSessions }) => {
	return (
		<div className="linearChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<LineChart
					width={300}
					height={300}
					data={dataSessions}
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
						dataKey="dayLetter"
						dy={10}
						tickLine={false}
						axisLine={false}
						tick={{ fill: "white", opacity: "0.5" }}
					/>
					<YAxis dataKey="sessionLength" domain={["dataMin - 10", "dataMax"]} hide />

					<Tooltip
						labelStyle={{ color: "black", fontSize: 8 }}
						contentStyle={{ border: "none", width: "39px", height: "25px" }}
						content={<CustomSessionsTooltip />}
						cursor={<CustomCursor />}
						wrapperStyle={{ outlineStyle: "none" }}
					/>
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
						content={showLegend}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineChartSessions;

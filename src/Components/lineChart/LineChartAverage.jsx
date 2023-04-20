import React from "react";
import { PropTypes } from "prop-types";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,Legend,CartesianGrid,Rectangle,
} from "recharts";


/**
 * @function is used to display the legend of the graph.
 * @return {*} 
 */

const legendAverage = () => {
	return <p style={{ width: "160px", color: "white", opacity: "0.5" }}>Durée moyenne des sessions</p>;
};

/** 
 * @param {points } 
 * @return {*} 
 */

const CustomCursor = ({ points }) => {
	return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={98} height={300} />;
};


/**
 * @component is used to display the tooltip when the user hovers over the graph.
 * @param {*} { active, payload }
 * @return {*} 
 * 
 */

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

	return (
		<div className="linearChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<LineChart
					width={300}
					height={300}
					data={dto.data} //données à afficher
					margin={{
						//marge de l'axe x
						top: 80,
						right: 20,
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
						dataKey="day" //donnée à afficher
						dy={10} //position de l'axe x
						tickLine={false} //ligne de l'axe x
						axisLine={false}
						tick={{ fill: "white", opacity: "0.5" }} //couleur de l'axe x
					/>
					<YAxis dataKey="sessionLength" domain={["dataMin - 10", "dataMax"]} hide />

					<Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

					<Line
						type="natural" //type de la ligne
						dataKey="sessionLength" //donnée à afficher
						strokeWidth={2} //epaisseur de la ligne
						dot={false} //point sur la ligne
						activeDot={{ r: 3, stroke: "white" }} //point sur la ligne au survol
						stroke="url(#colorUv)" //couleur de la ligne
					/>
					<Legend
						wrapperStyle={{
							margin: "-3rem 1rem", //position de la légende
						}}
						fontWeight={500} //epaisseur de la légende
						verticalAlign="top" //
						align="left"
						content={legendAverage} //contenu de la légende
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

LineChartAverage.propTypes = {	
	dto: PropTypes.object,
};

CustomTooltip.propType = {
	active: PropTypes.array.isRequired,
	payload: PropTypes.array.isRequired,
};

CustomCursor.propType = {	
	points: PropTypes.array.isRequired,
};


export default LineChartAverage;

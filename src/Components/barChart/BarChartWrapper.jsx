import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from "recharts";
import { PropTypes } from "prop-types";


const CustomTooltip = ({ active, payload }) => {
	//  (si `active` est vrai et si `payload` existe et contient au moins un élément :(payload;length)
	if (active && payload && payload.length) {
		// Renvoie un élément  affichant les valeurs de `payload[0]` et `payload[1]` concaténées avec "kg" et "KCal" respectivement.
		return (
			<div className="tooltip">
				<p>{`${payload[0]?.value} kg`}</p>
				<p>{`${payload[1]?.value} KCal`}</p>
			</div>
		);
	}

	//Si active est false, ou si payload n'est pas défini ou ne contient rien :
	return null;
};

const BarChartWrapper = ({ dto }) => {

	return (
		<div className="wrapper">
			<ResponsiveContainer aspect={2.3}>
				<BarChart
					width={835}
					height={320}
					data={dto.data}
					margin={{
						top: 80,
						right: 48,
						left: 48,
						bottom: 32,
					}}
					barGap={8}
				>
					<CartesianGrid vertical={false} strokeDasharray="3 3" stroke={`#dedede`} />
					<XAxis
						dataKey="day"
						tickFormatter={(day) => day.slice(-1)}
						tickLine={false}
						axisLine={false}
						tickMargin={15}
					/>
					<YAxis yAxisId="cal" dataKey="calories" orientation="left" tick={true} hide tickCount={3} />
					<YAxis
						yAxisId="kg"
						dataKey="kilogram"
						orientation="right"
						tickLine={false}
						stroke="FFFFF"
						domain={["dataMin - 1", "dataMax"]}
						tickCount={3}
						tick={{ stroke: "9B9EAC" }}
						dx={50}
					/>
					//*legendes :point noir & rouge kilos et calories
					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType={"circle"}
						width={277}
						height={25}
						wrapperStyle={{ top: "4%", right: "5%" }}
						formatter={(kilogram) => {
							return <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>{kilogram}</span>;
						}}
					/>
					//* Fond de couleur gris des bars
					<Tooltip
						wrapperStyle={{ outlineStyle: "none" }}
						content={<CustomTooltip />}
						cursor={{ fill: "#DFDFDF" }}
					/>
					<Bar
						yAxisId="kg"
						dataKey="kilogram"
						name="Poids (kg)"
						fill="#00000"
						barSize={7}
						radius={[5, 5, 0, 0]}
					/>
					<Bar
						yAxisId="cal"
						dataKey="calories"
						name="Calories brûlées (kCal)"
						fill="#FF0000"
						barSize={7}
						radius={[5, 5, 0, 0]}
					/>
					//* activite quotidienne :  X horizontal   Y vertical 
					<text 
						x="5%"
						y="5%"
						dominantBaseline="middle"
						fill="#20253A"
						style={{ fontWeight: 500, fontSize: 15, marginLeft: -50 }}
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

CustomTooltip.propType = {
	active: PropTypes.array.isRequired,
	payload: PropTypes.array.isRequired,
};


BarChartWrapper.propTypes = {
	dto: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.array.isRequired]),
};


export default BarChartWrapper;
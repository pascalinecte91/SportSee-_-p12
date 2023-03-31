import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from "recharts";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
	//  (si `active` est vrai et si `payload` existe et contient au moins un élément :(payload;length)
	if (active && payload && payload.length) {
		// Renvoie un élément  affichant les valeurs de `payload[0]` et `payload[1]` concaténées avec "kg" et "KCal" respectivement.
		return (
			<div className="tooltip">
				<p className="tooltip__kilo">{`${payload[0]?.value} kg`}</p>
				<p className="tooltip__kcal">{`${payload[1]?.value} KCal`}</p>
			</div>
		);
	}

	//Si active est false, ou si payload n'est pas défini ou ne contient rien :
	return null;
};

const BarChartActivity = ({ dataActivity }) => {
	return (
		<div className="activityChart"	>
			<ResponsiveContainer aspect={2.3}>
				<BarChart
					width={835}
					height={320}
					data={dataActivity}
					margin={{
						top: 80,
						right: 48,
						left: 48,
						bottom: 32,
					}}
					barGap={8}
				>
					<CartesianGrid vertical={false} strokeDasharray="3 3" stroke={`#dedede`} />

					<XAxis tickLine={false} dataKey="day" dy={16} fill="9B9EAC" padding={{ left: -40, right: -40 }} />

					<YAxis yAxisId="left" dataKey="calories" orientation="left" tick={true} hide tickCount={3} />
					<YAxis
						yAxisId="right"
						dataKey="kilogram"
						orientation="right"
						tickLine={false}
						stroke="#FFFFF"
						domain={["dataMin - 1", "dataMax"]}
						tickCount={3}
						tick={{ stroke: "9B9EAC" }}
						dx={50}
					/>

					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType={"circle"}
						width={277}
						height={25}
						wrapperStyle={{ top: "10%", right: "5%" }}
						formatter={(value) => {
							return <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>{value}</span>;
						}}
					/>
					<Tooltip
						wrapperStyle={{ outlineStyle: "none" }}
						content={<CustomTooltip />}
						cursor={{ fill: "#DFDFDF" }}
					/>
					<Bar
						yAxisId="right"
						dataKey="kilogram"
						name="Poids (kg)"
						fill="#00000" 
						barSize={7}
						radius={[5, 5, 0, 0]}
					/>
					<Bar
						yAxisId="left"
						dataKey="calories"
						name="Calories brûlées (kCal)"
						fill="#FF0000"
						barSize={7}
						radius={[5, 5, 0, 0]}
					/>
					<text
						className="activityChart__title"
						x="5%"
						y="10%"
						width={147}
						height={25}
						textAnchor="start"
						dominantBaseline="middle"
						fill="#20253A"
						style={{ fontWeight: 500 }}
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarChartActivity;

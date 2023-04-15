import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { PropTypes } from "prop-types";



const Kind = ({ item }) => {
	const KindItems = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
	if (item) {
		return KindItems[item - 1];
	
	}
};


const ChartPerformance = ({ dto }) => {

	return (
		<div className="performance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					width={200}
					height={200}
					cx="50%"
					cy="50%"
					outerRadius="65%"
					data={dto.data}
					startAngle={30}
					endAngle={-330}
				>
					<PolarGrid radialLines={false} />

					<PolarAngleAxis
						dataKey="kind"
						item={Kind}
						stroke={`#fff`}
						dy={4}
						tickLine={false}
						style={{
							fontSize: ".7vw",
							fontWeight: "500",
						}}
					/>

					<Radar 
					name="Radar" 
					dataKey="value" 
					fill={`#ff0000`} 
					fillOpacity={0.7} 
					stroke="transparent" 
					/>

				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
		<div></div>
	
}

export default ChartPerformance;

// Proptypes

Kind.propType = {
	item: PropTypes.array.isRequired,
};

ChartPerformance.propTypes = {
	dto: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.array.isRequired]),
};

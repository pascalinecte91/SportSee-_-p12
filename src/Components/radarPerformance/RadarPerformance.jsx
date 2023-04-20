import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from "recharts";
import { PropTypes } from "prop-types";
import { weight } from "assets/weight.png";

/**
 * This component is used to display the radar chart of the performance page
 * @param {object} { dto }
 * @return {JSX.Element}
 * @content array of object with key kind and value . Key kind is the kind of performance and value is the value of the performance
 * 	
 */


/**
 * @param {tickItem} 
 * @return {*} 
 * @check if tickItem is not null  false undefined or 0
 * @return {string}
 * 
 */
const FormatDataKind = (tickItem) => {
	const Kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
	if (tickItem) return Kind[tickItem - 1];
};;


const RadarPerformance = ({dto}) => {

	return (
		<div className="radarChartPerf" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<RadarChart
					cx="50%" //center x
					cy="50%"
					outerRadius={80} //rayon exterieur
					data={dto.data.data}
					style={{ backgroundColor: "#282D30", borderRadius: "5px" }} //style du radar
				>
					<PolarGrid radialLines={false} />

					<PolarAngleAxis
						dataKey="kind"
						tickFormatter={FormatDataKind}
						stroke="#ffff"//couleur des lignes
						dy={2}//decalage des lignes
						tickLine={false}//affichage des lignes entre octogone et texte
						style={{
							fontSize: "12px",
							fontWeight: "500",
						}}
					/>

					<Radar
						dataKey="value" //valeur de l'axe
						stroke="##FF0000" //couleur du contour
						fill="#FF0000" //couleur de remplissage
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarPerformance;

// Proptypes

FormatDataKind.propType = {
	tickItem: PropTypes.array.isRequired,
};

RadarPerformance.propTypes = {
	dto: PropTypes.object,
};

import React from "react";
import { PropTypes } from "prop-types";
import { PolarAngleAxis, RadialBar, RadialBarChart, PieChart, Pie, Legend } from "recharts";

/**
 * 
 * @param {*} { dto }
 * @return {*} 
 * 
 */

const RadarScore = ({ dto }) => {
	//console.log(dto); // data 0.12
	const todayScore = dto.data;
	//console.log(todayScore); // 0.12

	
	const data = todayScore >= 1 ? [{ data: 100 }] : [{ data: todayScore * 100 }];

	return (
		<>
			<div className="pieChartContent">
				<PieChart
					className="pieChart"
					width={258}
					height={263}
					style={{ backgroundColor: "#fdfdfd", borderRadius: "5px" }}
				>
					<Pie
						data={dto.data}
						startAngle={90} // degré de départ
						endAngle={(dto.data / 1) * 360 + 90} // degré de fin
						cx="50%" // position du centre
						cy="50%" //
						innerRadius={60} // rayon interieur
						outerRadius={80}
						fill="#ff0000" // couleur du cercle
						dataKey="value"
					/>
					<text x="41%" y="45%" fontSize="24px" fontWeight={900}>
						{todayScore * 100} %
						<tspan x="36%" y="46%" dy={20} fontWeight={500} fontSize="16px" letterSpacing="0.6">
							de votre
						</tspan>
						<tspan x="38%" y="46%" dy={40} fontSize="16px" fontWeight={500}>
							objectif
						</tspan>
					</text>
				</PieChart>
			</div>
		</>
	);
};


RadarScore.propTypes = {
	dto: PropTypes.object,
};
export default RadarScore;

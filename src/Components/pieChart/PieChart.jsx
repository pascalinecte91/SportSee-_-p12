import React from "react";
import { PropTypes } from "prop-types";
import { PieChart, Pie, RadialBarChart, RadialBar } from "recharts";


const  pieChart = ({ todayScore }) => {
	// on verifie que la valeur todayScore est bien un nombre entre 0 et 1
	if (typeof todayScore !== "number" || todayScore < 0 || todayScore > 1) {
		return null;
	}
	const data = [{ name: "Group A", value: todayScore }];


	return (
		<div className="cardPieChart">
			<PieChart className="cardPieChart__score" width={200} height={200}>
				<Pie
					data={data}
					startAngle={90}
					endAngle={todayScore * 360 + 90}
					cx="50%"
					cy="50%"
					innerRadius={60}
					outerRadius={80}
					fill="#FF0000"
					dataKey="value"
				/>
				
			</PieChart>
			<p className="cardPieChart__number">{todayScore * 100}%</p>
			<h3>Score</h3>
			<span>de votre<br />objectif</span>
		</div>
	);
};

 pieChart.propTypes = {
	todayScore: PropTypes.number.isRequired,
};

export default  pieChart;

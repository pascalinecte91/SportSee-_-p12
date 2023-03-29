import React from 'react';
import { PropTypes } from "prop-types";
import { PieChart, Pie } from 'recharts';


 const TodayScore = ({ todayScore })  => {
  const reste = 1 - todayScore;
  const data = [
		{ name: "Group A", value: todayScore },
		
  ];

  return (
		<>
			<div className="pieChartContent">
				<PieChart className="pieChart" width={250} height={250}>
					<Pie
						data={data}
						startAngle={90}
						endAngle={(todayScore / 1) * 360 + 90}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={80}
						fill="#ff0000"
						dataKey="value"
					/>
				</PieChart>
        
				<p className="score">{todayScore * 100 + "%"}</p>
			</div>
		</>
  );
}

TodayScore.propTypes = {
  todayScore: PropTypes.number,
};

export default TodayScore;


import React from "react";
import { PropTypes } from "prop-types";
import { PieChart, Pie } from "recharts";

/**
 * RadarScore component to display a pie chart representing the daily score.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.dto - The object containing score data.
 * @returns {*} The RadarScore component.
 */
const RadarScore = ({ dto }) => {
  const todayScore = dto.data;

  const dataPie = [
    { value: 1, fill: "transparent" },
    { value: todayScore, fill: "#ff0101" },
  ];

  return (
    <>
      <section className="pieChart">
        <PieChart
          className="pieChartContent"
          width={258}
          height={263}
          style={{ backgroundColor: "#fbfbfb", borderRadius: "5px" }}
        >
          <Pie
            data={dataPie}
            dataKey="value"
            startAngle={-170} // starting degree
            cx="50%" // center position
            cy="50%" //
            endAngle={170} // ending degree
            innerRadius={80} // thickness of the circle
            outerRadius={90} //
            fill="#ff0101" // circle color
          />
          <text x={20} y={50}>
            Score
          </text>
          <text x="41%" y="45%" fontSize="24px" fontWeight={900}>
            {todayScore * 100} %
            <tspan
              x="36%" // text position
              y="46%"
              dy={20} // text offset
              fontWeight={500}
              fontSize="16px"
              letterSpacing="0.6"
            >
              of your
            </tspan>
            <tspan x="38%" y="46%" dy={40} fontSize="16px" fontWeight={500}>
              goal
            </tspan>
          </text>
        </PieChart>
      </section>
    </>
  );
};

// Definition of the component's property types
RadarScore.propTypes = {
  dto: PropTypes.object,
};

export default RadarScore;

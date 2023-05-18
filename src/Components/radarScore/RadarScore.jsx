import React from "react";
import { PropTypes } from "prop-types";
import { PieChart, Pie } from "recharts";

/**
 * Composant RadarScore pour afficher un diagramme en secteurs (pie chart) représentant le score du jour.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.dto - L'objet contenant les données du score.
 * @returns {*} Le composant RadarScore.
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
            startAngle={-170} // degré de départ
            cx="50%" // position du centre
            cy="50%" //
            endAngle={170} // degré de fin
            innerRadius={80} // epaissseur du cercle
            outerRadius={90} //
            fill="#ff0101" // couleur du cercle
          />
          <text x={20} y={50}>
            Score
          </text>
          <text x="41%" y="45%" fontSize="24px" fontWeight={900}>
            {todayScore * 100} %
            <tspan
              x="36%" // position du texte
              y="46%"
              dy={20} // décalage du texte
              fontWeight={500}
              fontSize="16px"
              letterSpacing="0.6"
            >
              de votre
            </tspan>
            <tspan x="38%" y="46%" dy={40} fontSize="16px" fontWeight={500}>
              objectif
            </tspan>
          </text>
        </PieChart>
      </section>
    </>
  );
};

// Définition des types des propriétés du composant
RadarScore.propTypes = {
  dto: PropTypes.object,
};

export default RadarScore;

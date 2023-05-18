import React from "react";
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";
import { PropTypes } from "prop-types";

/**
 * @Composant RadarPerformance utilisé pour afficher le graphique radar de la page de performance.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.dto - L'objet contenant les données du graphique radar.
 * @returns {JSX.Element} Le composant RadarPerformance.
 * @content {Array} props.dto.data - Un tableau d'objets avec les clés "kind" et "value".
 * La clé "kind" représente le type de performance et "value" représente la valeur de la performance.
 */

/**
 * @function FormatDataKind
 * @param {number} tickItem - L'élément de la graduation.
 * @returns {string} La chaîne de caractères correspondant au type de performance.
 * @description Vérifie si tickItem n'est pas null, false, undefined ou 0, puis renvoie le type de performance correspondant.
 */
const FormatDataKind = (tickItem) => {
  const Kind = ["Cardio","Energie","Endurance","Force","Vitesse","Intensité"];
  if (tickItem) return Kind[tickItem - 1];
};

const RadarPerformance = ({ dto }) => {
  return (
    <div
      className="radarChartPerf"
      style={{ minWidth: "258px", height: "263px" }}
    >
      <ResponsiveContainer>
        <RadarChart
          cx="50%" //centre x
          cy="50%"
          outerRadius={80} //rayon extérieur
          data={dto.data.data}
          style={{ backgroundColor: "#282D30", borderRadius: "5px" }} //style du graphique radar
        >
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={FormatDataKind}
            stroke="#ffff" //couleur des lignes
            dy={2} //décalage des lignes
            tickLine={false} //affichage des lignes entre octogone et texte
            style={{
              fontSize: "10px",
              fontWeight: "500",
            }}
          />

          <Radar
            dataKey="value" //valeur de l'axe
            stroke="#FF0000" //couleur du contour
            fill="#FF0000" //couleur de remplissage
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Proptypes
FormatDataKind.propTypes = {
  tickItem: PropTypes.number.isRequired,
};

RadarPerformance.propTypes = {
  dto: PropTypes.object,
};

export default RadarPerformance;

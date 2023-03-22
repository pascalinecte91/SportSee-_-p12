import React from "react";
import PropTypes from "prop-types";

/**
 * Composant de tooltip pour BarChart.
 * @param {object} props - Propriétés pour ce composant.
 * @param {Array} props.payload - Tableau d'objets représentant les données de la barre sur laquelle l'utilisateur a survolé.
 * @returns {JSX.Element} Composant tooltip.
 */

const BarChartTooltip = ({ payload }) => {
	return (
		<ul className="barChart__toolTip">
			{payload.map((entry, index) => (
				//* cle (elementTooltip)  pour chaque element des li quand màj sur un create ou un delete
				<li key={`elementTooltip-${index}`}>
					{entry.value}
					{entry.unit.toLowerCase()}
				</li>
			))}
		</ul>
	);
};

BarChartTooltip.propTypes = {
	payload: PropTypes.array,
};

export default BarChartTooltip;


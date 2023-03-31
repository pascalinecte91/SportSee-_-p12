
import React from "react";
import PropTypes from "prop-types";


// Ce composant prend une prop nommée "payload"
const BarChartTooltip = ({ payload }) => {
	//  retourne un élément <ul> 
	return (
		<ul className="toolTipActivity">
			{/* Pour chaque objet dans le tableau "payload", le composant crée un élément <li> */}
			{payload.map((entry, index) => (
	
				// La propriété "key" de l'élément <li> est définie avec une chaîne unique comprenant l'index
				<li key={`itemTooltip-${index}`}>
					{/* La valeur de l'objet est affichée dans l'élément <li> */}
					{entry.value}
					{/* La propriété "unit" de l'objet est convertie en minuscules et affichée dans l'élément <li> */}
					{entry.unit.toLowerCase()}
				</li>
		
			))}
		</ul>
	);
};

// Le composant BarChartTooltip définit une propType pour "payload", qui doit être un tableau
BarChartTooltip.propTypes = {
	payload: PropTypes.array,
};

export default BarChartTooltip;
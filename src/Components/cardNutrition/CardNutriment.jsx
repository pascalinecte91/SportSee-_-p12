import PropTypes from "prop-types";
import React from "react";



/**
 * @param {*} { icon, quantity, unity, type }
 * @description Component  calories, proteins, weight, carbohydrates
 * @return {JSX.Element}}
 */

const CardNutriment = ({ icon, quantity, unity, type }) => {
	return (
		<div className="card">
			<div className="card_icon">
				<img src={icon} alt="icon" />
			</div>
			<div className="card_content">
				<p className="card_quantity">{quantity}{unity}</p>
				<p className="card_type">{type}</p>
			</div>
		</div>
	);
};

CardNutriment.propTypes = {
	icon: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	unity: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

CardNutriment.defaultProps = {
	icon: "",
	quantity: 0,
	unity: "",
	type: "",
};
export default CardNutriment;

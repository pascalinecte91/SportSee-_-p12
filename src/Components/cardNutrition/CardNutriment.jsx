import PropTypes from "prop-types";
import React from "react";
import calories from "assets/calories.png";


 //**! */ @param {*} { icon, quantity, unity, type }
 //**  @description Component  calories, proteins, weight, carbohydrates
 //**  @return {JSX.Element}}
 

const CardNutriment = ({ icon, quantity, unity, type }) => {
	return (
		<section className="card">
			<div className="card__icon">
				<img src={icon} alt="icon" />
			</div>
			<div className="card__content">
				<p className="card__quantity">{quantity}{unity}</p>
				<p className="card__type">{type}</p>
			</div>
		</section>
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

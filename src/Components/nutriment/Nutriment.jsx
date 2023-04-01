import React from "react";
import protein from "assets/protein.png";
import lipid from "assets/lipid.png";
import carbohydrate from "assets/carbohydrate.png";
import calories from "assets/calories.png";
import { PropTypes } from "prop-types";

const Nutriment = ({ dto }) => {
	console.log(dto);
	return (
		<section className="feeding">
			<div className="feeding__calorie"><img src={calories} />{"calories"}{dto.data.calorieCount.toLocaleString("en-US", 
			{ minimumFractionDigits: 0, maximumFractionDigits: 0})}
			</div>
				<div className="feeding__protein"><img src={protein} />{"protein"} {dto.data.proteinCount} g</div>
				<div className="feeding__lipid"><img src={lipid} />{"lipid"} {dto.data.lipidCount} g</div>
				<div className="feeding__carbohydrate"><img src={carbohydrate} />{"carbohydrate"} {dto.data.carbohydrateCount} g</div>
		</section>
	);
};

Nutriment.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
};

export default Nutriment;

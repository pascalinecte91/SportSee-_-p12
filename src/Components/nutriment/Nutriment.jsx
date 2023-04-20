import React from "react";
import protein from "assets/protein.png";
import lipid from "assets/lipid.png";
import carbohydrate from "assets/carbohydrate.png";
import calories from "assets/calories.png";
import { PropTypes } from "prop-types";
import NutrimentDto  from "dto/NutrimentDto";

/**
* A React component that displays nutritional information.
* @param {Object} props - The props object for the Nutriment component.
* @param {Object} props.dto - An instance of the NutrimentDto class containing nutritional information.
* @returns {JSX.Element} - The JSX element for the Nutriment component.
*/


const Nutriment = ({ dto }) => {
	return (
		//fonction qui formate en string et en US  pour afficher le nombre avec des virgules pour separarer les milliers
		// et minimumFractionDigits: 0, maximumFractionDigits: 0 pour afficher le nombre sans decimales
		<section className="feeding">
			<div className="feeding__nutri">
			<div className="feeding__calorie"><img src={calories} /> {"calories"} {dto.data.calorieCount.toLocaleString("en-US", 
			{ minimumFractionDigits: 0, maximumFractionDigits: 0})} kCal 
			</div>
				<div className="feeding__protein"><img src={protein} />{"protein"} {dto.data.proteinCount} g</div>  
				<div className="feeding__lipid"><img src={lipid} />{"lipid"} {dto.data.lipidCount} g</div>
				<div className="feeding__carbohydrate"><img src={carbohydrate} />{"carbohydrate"} {dto.data.carbohydrateCount} g</div>
				</div>
		</section> 
	);
};

/**
* An instance of the NutrimentDto class containing nutritional information.
*/
Nutriment.propTypes = {
	dto: PropTypes.object,
};



export default Nutriment;

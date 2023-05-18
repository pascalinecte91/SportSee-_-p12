import React from "react";
import protein from "assets/protein.png";
import lipid from "assets/lipid.png";
import carbohydrate from "assets/carbohydrate.png";
import calories from "assets/calories.png";
import { PropTypes } from "prop-types";

/**
 * A React component that displays nutritional information.
 * @component
 * @param {Object} props - The props object for the Nutriment component.
 * @param {Object} props.dto - An instance of the NutrimentDto class containing nutritional information.
 * @returns {JSX.Element} - The JSX element for the Nutriment component.
 */

const Nutriment = ({ dto }) => {
  return (
    <section className="feeding">
      <div className="feeding__nutri">
        <div className="feeding__calorie">
          <img src={calories} alt="Calories" /> {"calories"}{" "}
          {dto.data.calorieCount.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,})}{" "}kCal
        </div>
        <div className="feeding__protein">
          <img src={protein} alt="Protein" />{"protein"} {dto.data.proteinCount} g
        </div>
        <div className="feeding__lipid">
          <img src={lipid} alt="Lipid" />{"lipid"} {dto.data.lipidCount} g
        </div>
        <div className="feeding__carbohydrate">
          <img src={carbohydrate} alt="Carbohydrate" />{"carbohydrate"} {dto.data.carbohydrateCount} g
        </div>
      </div>
    </section>
  );
};

/**
 * An instance of the NutrimentDto class containing nutritional information.
 * @typedef {Object} NutrimentDto
 * @property {number} calorieCount - The calorie count.
 * @property {number} proteinCount - The protein count.
 * @property {number} lipidCount - The lipid count.
 * @property {number} carbohydrateCount - The carbohydrate count.
 */

/**
 * @Props for the Nutriment component.
 * @typedef {Object} NutrimentProps
 * @property {NutrimentDto} dto - An instance of the NutrimentDto class containing nutritional information.
 */

/**
 * @PropTypes for the Nutriment component.
 * @type {NutrimentProps}
 */
Nutriment.propTypes = {
  dto: PropTypes.object,
};

export default Nutriment;

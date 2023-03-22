import React from 'react';
import yoga from "assets/yoga.png";
import swimming from "assets/swimming.png";
import bike from "assets/bike.png";
import weight from "assets/weight.png";

/**
 * Composant React pour la barre de navigation verticale.
 * @returns {JSX.Element} Le composant React pour la barre de navigation verticale.
 */

const VerticalSidebar = () => {
  return (
    <section className="vertical__nav">
    <ul>
      <li><img src={yoga} alt="Yoga"/></li>
      <li><img src={swimming} alt="Swimming"/></li>
      <li><img src={bike} alt="Bike"/></li>
      <li><img src={weight} alt="Weight"/></li>
    </ul>

    <span>© Copyright, SportSee {new Date().getFullYear()}</span>
  </section>
);
}


export default VerticalSidebar;
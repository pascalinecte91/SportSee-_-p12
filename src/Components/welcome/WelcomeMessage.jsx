import React from "react";

/**
 * @component       : 	WelcomeMessage
 * @description 	  : 	To render the welcome message component
 * @param {string}  : 	firstName
 * @return {*}
 */
const WelcomeMessage = ({ firstName }) => {
  return (
    <section className="header">
      <h1>
        Bonjour <span className="header__name">{`${firstName}`}</span>
      </h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p>
    </section>
  );
};

export default WelcomeMessage;

import React from "react";
import PropTypes from "prop-types";



/**
 * Affiche un message de bienvenue personnalisé avec le prénom de l'utilisateur et un message de félicitations.
 * @function
 * @param {object} props - Les propriétés du composant React.
 * @param {object} props.firstname - L'objet contenant le prénom de l'utilisateur.
 * @param {string} props.firstname.userInfos.firstName - Le prénom de l'utilisateur.
 * @returns {JSX.Element} - Le composant React qui affiche le message de bienvenue.
 */
const WelcomeMessage = ({ firstname }) => {
  return (
    <div>
      <h1>
        Bonjour{" "}
        <span className="firstname">{firstname.userInfos.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}

WelcomeMessage.propTypes = {
  /**
   * Le prénom de l'utilisateur.
   */
  firstName: PropTypes.string.isRequired,
};

export default WelcomeMessage;

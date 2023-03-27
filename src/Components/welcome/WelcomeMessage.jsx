import React from "react";
import PropTypes from "prop-types";

/**
 * Component React for display user's name with a welcoming message
 * @component
 */
const WelcomeMessage = ({ username }) => {
	return (
		<section className="welcome">
			<h1>
				Bonjour <span>{username}</span>
			</h1>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		</section>
	);
};

WelcomeMessage.propTypes = {
	username: PropTypes.string,
};

export default WelcomeMessage;

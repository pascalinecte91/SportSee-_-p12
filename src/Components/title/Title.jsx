import React from "react";
import PropTypes from "prop-types";


const Title = ({ firstName }) => {
	return (
		<section className="wrapper">
			<div className="wrapper__title">
				<h1>
					Bonjour <span>{firstName ? ` ${firstName}` : "Invité"}</span>
				</h1>
			</div>
			<div className="wrapper__description">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
		</section>
	);
};

Title.propTypes = {
	firstName: PropTypes.string.isRequired,
};
export default Title;

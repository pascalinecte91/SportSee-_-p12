import React from "react";
import PropTypes from "prop-types";

import "./title.scss";

const Title = ({ firstName }) => {
	return (
		<div className="wrapper">
			<div className="wrapper_title">
				<h1>
					Bonjour <span>{firstName ? ` ${firstName}` : "Invité"}</span>
				</h1>
			</div>
			<div className="wrapper_description">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
		</div>
	);
};

Title.propTypes = {
	firstName: PropTypes.string.isRequired,
};
export default Title;

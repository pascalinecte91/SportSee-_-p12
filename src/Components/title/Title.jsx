import React from 'react';
import PropTypes from "prop-types";



const Title = ({firstName}) => {
	return (
		<div className="wrapper">
			<div className="wrapper_title">Bonjour <h1>{firstName}</h1></div>
			<div className="wrapper_description">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
		</div>
	);
};

Title.propTypes = {
	firstName: PropTypes.string.isRequired,
};
export default Title;
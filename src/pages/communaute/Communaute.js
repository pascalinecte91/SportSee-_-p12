import logo from "assets/logo.png";
import React from "react";

/**
 * Composant React pour la section "Communaute".
 * @returns {JSX.Element} Le composant React pour la section "Communaute".
 *
 */

const Communaute = () => {
	return (
		<>
			<section className="communaute">
				<h1>Communaute</h1>
				<h1>Bienvenu sur</h1>
				<img src={logo} alt="logo" />
			</section>
		</>
	);
};

export default Communaute;

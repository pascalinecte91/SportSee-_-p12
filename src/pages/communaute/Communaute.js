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
				<div className="communaute__title">
					<h1>Page Communauté</h1>

					<img src={logo} alt="logo" />
				</div>
			</section>
		</>
	);
};

export default Communaute;

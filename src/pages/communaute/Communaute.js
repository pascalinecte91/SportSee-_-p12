import logo from "assets/logo.png";
import React from "react";

/**
 * @component Communaute - A simple communaute page
 * @returns {JSX.Element} .
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

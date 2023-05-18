import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Error component representing a simple error page.
 * @returns {JSX.Element} The Error component.
 */
const Error = () => {
	return (
		<section className="error">
			<aside className="error__page">
				<h1>Error 404</h1>
				<p>Oops! The page you are looking for does not exist!</p>
				<NavLink to="/">Return Home</NavLink>
			</aside>
		</section>
	);
};

export default Error;

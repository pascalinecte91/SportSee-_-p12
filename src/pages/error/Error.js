import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @component Error - A simple error page
 * @Descriptif - A simple error page
 *
 */
const Error = () => {
	return (
		<section className="error">
			<aside className="error__page">
				<h1>Erreur 404</h1>
				<p>Oups ! La page que vous recherchez n'existe pas !</p>
				<NavLink to="/">Retour Accueil</NavLink>
			</aside>
		</section>
	);
};

export default Error;

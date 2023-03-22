import React from "react";
import { NavLink } from "react-router-dom";


/**
 * Composant React pour la page d'erreur 404.
 * @returns {JSX.Element} Le composant React pour la page d'erreur 404.
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
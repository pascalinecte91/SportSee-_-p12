import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";

/**
 * Composant React pour le tableau de bord.
 * @returns {JSX.Element} Le composant React pour le tableau de bord.
 */

const Login = () => {
	return (
		<section className="login">
			<header className="login__header">
				<picture>
					<img src={logo} alt="logo Sportsee"></img>
					<h1>Choisissez et connectez-vous </h1>
				</picture>
			</header>
			<div className="login__wrapper">
				<ul>
					<li>
						<NavLink to={`../dashboard/12`}>
							<p>Karl</p>
						</NavLink>
					</li>
					<li>
						<NavLink to={`../dashboard/18`}>
							<p>Cecilia</p>
						</NavLink>
					</li>
				</ul>
			</div>
		</section>
	);
};



export default Login;

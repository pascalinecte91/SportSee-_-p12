import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";

/**
 * Component React for display page Login.
 * Page Login will be necessary for user authentification.
 * For the moment, the page shows only 2 links to insert user's id in URL and
 * display data corresponding for each user in his homepage.
 * @component
 */
const Login = () => {
	return (
		<section className="login">
			<header className="login__header">
				<picture>
					<img src={logo} alt="logo Sportsee"></img>
				</picture>
			</header>
			<nav className="login__content">
				<h1>Se connecter</h1>
				<ul>
					<li>
						<NavLink to="/home/12">
							<p>Karl</p>
						</NavLink>
					</li>
					<li>
						<NavLink to="/home/18">
							<p>Cecilia</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Login;

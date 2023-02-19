import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";

/**
 * 
 * Component that displays the project navigation bar
 * @component
 */

const Navbar = () => {
	let userId = "18";

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<div className="logo"><img src={logo} alt={logo} />
				</div>
				<ul className="navbar__link">
					<NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" :"")}end>
						<li className="navbar__item">Accueil</li></NavLink>
					<NavLink to={`/user/${userId}`} className={({ isActive }) => (isActive ? "nav-active" : "")}end>
						<li className="navbar__item">Profil</li></NavLink>
					<NavLink to="/reglage" className={({ isActive }) => (isActive ? "nav-active" : "")}end>
						<li className="navbar__item">Réglage</li></NavLink>
					<NavLink to="/community" className={({ isActive }) => (isActive ? "nav-active" : "")}end>
						<li className="navbar__item">Communauté</li></NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
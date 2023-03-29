import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "assets/logo.png";

/** 
 * Component React for display horizontal application's navigation
 * @component
 */

const Navbar = () => {
	/**
	 * User's id number collected by a hook in the page's URL
	 * @constant
	 * @type {number}
	 */
	const { userID } = useParams();
	/**
	 * Array containing objects with name and uri for each navigation's link
	 * @constant with 4 objects  with name and uri for each navigation
	 * @type {array}
	 *
	 */

	const navItems = [
		{ name: "Accueil", url: "/home/" },
		{ name: "Profil", url: "/dashboard/" },
		{ name: "Réglage", url: "/setting/" },
		{ name: "Communauté", url: "/communite/" },
	];

	return (
		<header className="horizontal">
			<nav className="horizontal__nav">
				<NavLink to="/login">
					<picture>
						<img src={logo} alt="logo SportSee"></img>
					</picture>
				</NavLink>
			
				{navItems.map((item, index) => (
					<NavLink
						to={userID ? item.url + userID : item.url}
						key={item.name + index}
						//* link actif  sinon nav_goToPage
						className={(nav) => (nav.isActive ? "nav_goToPage--active" : "nav_goToPage")}
					>
						{item.name}
					</NavLink>
				))}
			</nav>
		</header>
	);
};


export default Navbar;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home.js";
import Profil from "pages/profil/Profil.js";
import Reglage from "pages/reglage/Reglage.js";
import Communaute from "pages/communaute/Communaute.js";
import Navbar from "./Components/navbar/Navbar.jsx";
import VerticalSidebar from "./Components/verticalSidebar/VerticalSidebar.jsx";

/**
 * Routes and Links
 */

const App = () => {
	return (
		<div className="container">
			<Navbar />
			<VerticalSidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:userId" element={<Profil />} />
				<Route path="/reglage" element={<Reglage />} />
				<Route path="/communaute" element={<Communaute />} />
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</div>
	);
};

export default App;

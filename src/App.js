import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home.js";
import Dashboard from "pages/dashboard/Dashboard.js";
import Reglage from "pages/reglage/Reglage.js";
import Communaute from "pages/communaute/Communaute.js";
import Navbar from "./Components/navbar/Navbar.jsx";
import VerticalSidebar from "./Components/verticalSidebar/VerticalSidebar.jsx";

//! Routes and Links

const App = () => {
	return (
		<header className="container">
			<Navbar />
			<VerticalSidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:userId" element={<Dashboard />} />
				<Route path="/reglage" element={<Reglage />} />
				<Route path="/communaute" element={<Communaute />} />
				<Route path="*" element={<Error />}></Route>
			</Routes>
		</header>
	);
};

export default App;

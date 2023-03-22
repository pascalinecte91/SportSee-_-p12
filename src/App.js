import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "pages/home/Home.js";
import Dashboard from "pages/dashboard/Dashboard.js";
import Login from "pages/login/Login.js";
import Setting from "pages/setting/Setting.js";
import Communaute from "pages/communaute/Communaute.js";
//components
import Navbar from "./Components/navbar/Navbar.jsx";
import VerticalSidebar from "./Components/verticalSidebar/VerticalSidebar.jsx";


//! Routes and Links

const App = () => {
	return (
		<header className="container">
			<Navbar />
			<VerticalSidebar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home/:userID" element={<Home />} />
				<Route path="/dashboard/:userID" element={<Dashboard />} />
				<Route path="/setting/:userID" element={<Setting />} />
				<Route path="/communaute/:userID" element={<Communaute />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</header>
	);
};

export default App;

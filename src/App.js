import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "pages/home/Home.js";
import Dashboard from "pages/dashboard/Dashboard.js";
import Login from "pages/login/Login.js";
import Setting from "pages/setting/Setting.js";
import Communaute from "pages/communaute/Communaute.js";
import Error from "pages/error/Error.js";
//components
import Navbar from "Components/navbar/Navbar";
import VerticalSidebar from "Components/verticalSidebar/VerticalSidebar";
import WelcomeMessage from "Components/welcome/WelcomeMessage";

import "./app.scss";

//! Routes and Links

const App = () => {
	return (
		<header className="routePage">
			<Navbar />
			<VerticalSidebar />
			<section className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* 			<Route path="/home" element={<Home />} /> */}
					<Route path="/home/:userId" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard/:userId" element={<Dashboard />} />
					<Route path="/setting/" element={<Setting />} />
					<Route path="/communaute/" element={<Communaute />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</section>
		</header>
	);
};

export default App;
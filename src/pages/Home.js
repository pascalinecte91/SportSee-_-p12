
import logo from "assets/logo.png";
import React from "react";
import Navbar from "Components/navbar/Navbar";
import VerticalSidebar from "Components/verticalSidebar/VerticalSidebar";


const Home = () => {
  return (
		<div>
			<Navbar />
		
			<main className="home-main">
				<div className="home-title">
				<VerticalSidebar />
				</div>
			</main>
		</div>
	);
};

export default Home;

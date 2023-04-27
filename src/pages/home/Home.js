import logo from "assets/logo.png";
import React from "react";
import Login from "Components/login/Login";
import Switch from "Components/switch/Switch";

const Home = ( firstName, lastName, age) => {
	return (
		<>
			<section className="home">
				
			
					<Login firstName={firstName} lastName={lastName} age={age} />
				
			</section>
		</>
	);
};

export default Home;

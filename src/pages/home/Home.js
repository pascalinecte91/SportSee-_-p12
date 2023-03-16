
import logo from "assets/logo.png";
import React from "react";


/**
 * Component page that displays home page
 * @component
 */

const Home = () => {

  return (
		<>
			<header className="home">
	
				<div className="home__title">
					<h1>Bienvenu sur</h1>
					<img src={logo} alt="" />
				</div>
			</header>
		</>
  );
};

export default Home;

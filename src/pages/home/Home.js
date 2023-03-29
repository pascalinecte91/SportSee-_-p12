
import logo from "assets/logo.png";
import React from "react";



const Home = () => {

  return (
		<>
			<section className="home">
				<div className="test">
					<div className="home__title">
						<h1>Bienvenu sur</h1>
						<img src={logo} alt="logo" />
					</div>
				</div>
			</section>
		</>
  );
};

export default Home;

import React from "react";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

const LoginReminder = () => {
  return (
    <>
      <section className="LoginReminder">
        <div className="LoginReminder__title">
		<h1>
        Hello ! 👀 Rendez vous sur{" "}
        <NavLink to="/" style={{ margin: "0 5px" }}>
          l'onglet Accueil
        </NavLink>{" "}
        pour choisir votre profil
      </h1>

          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default LoginReminder;

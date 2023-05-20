import React from "react";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

/**
 * Component for displaying a login reminder.
 * @component
 * @return {JSX.Element} - LoginReminder component.
 */
const LoginReminder = () => {
  return (
    <>
      <section className="loginReminder">
        <div className="loginReminder__title">
          <h1>
            Hello! 👀 Go to{" "}
            <NavLink to="/" style={{ margin: "0 5px" }}>
              the Home tab
            </NavLink>{" "}
            to choose your profile.
          </h1>
          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default LoginReminder;

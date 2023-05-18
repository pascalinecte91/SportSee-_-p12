import React from "react";
import logo from "assets/logo.png";

/**
 * @component Setting - A simple settings page
 * @returns {JSX.Element} The Setting component.
 */
const Setting = () => {
  return (
    <>
      <section className="reglage">
        <div className="reglage__title">
          <h1>Page Réglages</h1>
          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Setting;

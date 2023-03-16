import React from "react";
import { NavLink } from "react-router-dom";
import "./error.scss;"

//*!@function display error page
//* @returns (<Error/>)

const Error = () => {
    return (
        <section className="error">
            <div className="error__code">404</div>
            <div className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <Navlink className="error__page" to="/">Retourner sur la page d'accueil </Navlink>
        </section>
    )
}
export default Error;
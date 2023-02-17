import React from "react";
import { NavLink } from "react-router-dom";
import "./error.scss;"

/**@function display error page
 *
 * @returns (<Error/>)
 */

const Error = () => {
    return (
        <div className="error">
            <div className="error_code">404</div>
            <div className="error_text">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <Navlink to="/">Retourner sur la page user</Link>
        </div>
    )
}
export default Error;
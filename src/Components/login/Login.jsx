import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";
import { USER_MAIN_DATA } from "dataProvider/dataMock";
import { useParams } from "react-router-dom";
import Switch from "Components/switch/Switch.jsx";

/**
 * Composant React pour le tableau de bord.
 * @returns {JSX.Element} Le composant React pour le tableau de bord.
 */

const Login = () => {
  const [isDemo, setDemo] = useState(false);
  console.log(isDemo);
  const { userId } = useParams();
 
 
  return (
    <section className="login">
      <header className="login__header">
        <picture>
          <img src={logo} alt="logo Sportsee"></img>
          <h1>Choisissez et connectez-vous </h1>
        </picture>
        <Switch setDemo={setDemo} isDemo={isDemo}/>
      </header>

      <div className="login__wrapper">
        <ul>
          {USER_MAIN_DATA.map((user, index) => {
            const userInfos = user.userInfos;
            const { firstName, lastName, age } = userInfos;
            return (
              <li key={user.id}>
                <NavLink to={`/dashboard/${user.id}/${isDemo}`}>
                  <div className="login__identity">
                    {`${firstName} ${lastName} `}
                    <p className="login__age">{`${age} ans`}</p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Login;

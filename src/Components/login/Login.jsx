import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo.png";
import { USER_MAIN_DATA } from "dataProvider/dataMock";
import { useParams } from "react-router-dom";
import Switch from "Components/switch/Switch.jsx";

/**
 * React component for the login page.
 * @returns {JSX.Element} - Login component.
 */
const Login = () => {
  const [isDemo, setDemo] = useState(false);
  const { userId } = useParams();
 
  return (
    <section className="login">
      <header className="login__header">
        <picture>
          <img src={logo} alt="logo Sportsee" />
          <h1>Choose and log in</h1>
        </picture>
        <Switch setDemo={setDemo} isDemo={isDemo} />
      </header>

      <div className="login__wrapper">
        <ul>
          {USER_MAIN_DATA.map((user) => {
            const userInfos = user.userInfos;
            const { firstName, lastName, age } = userInfos;
            let emoji = null;
            if (isDemo) {
              // Set emoji based on user ID when in demo mode
              if (user.id === 18) {
                emoji = "🏃‍♀️";
              } else if (user.id === 12) {
                emoji = "🏃‍♂️";
              }
            }
            return (
              <li key={user.id}>
                <NavLink to={`/dashboard/${user.id}/${isDemo}`}>
                  <div className="login__identity">
                    <div className="login__emoji">{emoji}</div>
                    {`${firstName} ${lastName} `}
                    <p className="login__age">{`${age} years old`}</p>
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

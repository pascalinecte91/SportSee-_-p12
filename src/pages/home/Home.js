import React, { useContext } from "react";
import Login from "Components/login/Login";
import Switch from "Components/switch/Switch";
import { DemoProvider } from "Components/switch/DemoContext.jsx";
import ApiProvider from "dataProvider/ApiProvider";
import ApiMockProvider from  "dataProvider/ApiMockProvider";
import DemoContext from "Components/switch/DemoContext.jsx";

const Home = ({ firstName, lastName, age }) => {

  return (
    <DemoProvider>
      <section className="home">
        <Login firstName={firstName} lastName={lastName} age={age} />
 
      </section>
    </DemoProvider>
  );
};

export default Home;
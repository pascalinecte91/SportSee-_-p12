import React, { useContext } from "react";
import DemoContext from "Components/switch/DemoContext"; // Assurez-vous du chemin d'importation

const Switch = () => {
  const { isDemo, setDemo } = useContext(DemoContext);

  const handleChange = () => {
    console.log(handleChange);
    setDemo(!isDemo);
    console.log(!isDemo);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDemo} onChange={handleChange} />
      <span className="slider round"></span>
      <span className="switch__label" data-on="Api" data-off="Mock"></span>
    </label>
  );
};

export default Switch;

import React from "react";

/**
 * @Composant Switch permettant de basculer entre les modes "Mock" et "Api".
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.setDemo - La fonction pour définir le mode "Demo".
 * @param {boolean} props.isDemo - Le mode "Demo" actuel.
 * @returns {JSX.Element} - Le composant Switch.
 */
const Switch = ({ setDemo, isDemo }) => {
  /**
   * Gère le changement de l'état du switch.
   */
  const handleChange = () => {
    setDemo(!isDemo);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDemo} onChange={handleChange} />
      <span className="slider round"></span>
      <span className="switch__label" data-on="Mock" data-off="Api"></span>
    </label>
  );
};

export default Switch;

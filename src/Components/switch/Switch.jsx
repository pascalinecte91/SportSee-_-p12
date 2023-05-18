import React from "react";

/**
 * Switch component for toggling between "Mock" and "Api" modes.
 * @param {Object} props - The component props.
 * @param {function} props.setDemo - The function to set the "Demo" mode.
 * @param {boolean} props.isDemo - The current "Demo" mode.
 * @returns {JSX.Element} - The Switch component.
 */
const Switch = ({ setDemo, isDemo }) => {
  /**
   * Handles the switch state change.
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

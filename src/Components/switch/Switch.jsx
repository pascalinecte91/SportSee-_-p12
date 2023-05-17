
const Switch = ( {setDemo, isDemo} ) => {
 
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

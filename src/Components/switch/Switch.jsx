
/**
 * @description 		: 	To render the switch component
 * @param {boolean} 	: 	demo
 * @param {function} 	: 	setDemo
 * @returns 		   	: 	React node
 * @exports 		    : 	Switch
 * @return {*}
 */

const Switch = ({ isDemo }) => {

  const handleChange = () => {
  
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

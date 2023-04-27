import { PropTypes } from "prop-types";
import React, { useState } from "react";

 const Switch = () => {
	const [click, setClick] = useState(false);

	function handleClick() { 
		
		setClick(!click);
	}

	return (
		<label className="switch">
			<input type="checkbox" defaultChecked={click} onClick={handleClick} />

			<span className="slider round"></span>
			<span className="switch__label" data-on="Api" data-off="Mock"></span>
		</label>
	);
}; 


export default Switch;

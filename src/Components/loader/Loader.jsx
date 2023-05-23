import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <div className="loader__spinner"></div>
        <span className="loader__text">In Progress</span>
      </div>
    </div>
  );
};

export default Loader;

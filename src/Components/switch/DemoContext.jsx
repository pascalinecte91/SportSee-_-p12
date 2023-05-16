import React, { createContext, useState } from "react";

const DemoContext = createContext();

export const DemoProvider = ({ children }) => {
  const [isDemo, setDemo] = useState(false);

  return (
    <DemoContext.Provider value={{ isDemo, setDemo }}>
      {children}
    </DemoContext.Provider>
  );
};

export default DemoContext;
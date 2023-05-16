import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { HashRouter } from "react-router-dom";
import "style/index.scss";
import "app.scss";
import { DemoProvider } from "Components/switch/DemoContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <DemoProvider>
      <App />
    </DemoProvider>
  </HashRouter>
);
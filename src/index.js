import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { HashRouter } from "react-router-dom";
import "style/index.scss";
import "app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

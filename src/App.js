import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Profil from "./pages/Profil.js";
import Reglage from "./pages/Reglage.js";
import Communaute from "./pages/Communaute.js";

/**
 * Routes and Links
 */

const App = () => {
  return (
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/user/:userId" element={<Profil />}></Route>
<Route path="/reglage" element={<Reglage />}></Route>
<Route path="/communaute" element={<Communaute />}></Route>
</Routes>
  );
  }
  
export default App;
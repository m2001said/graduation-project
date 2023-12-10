import React from "react";
import Navbar1 from "../components/sections/navbars/navbar1/Navbar1";
import Hero1 from "../components/sections/heros/hero1/Hero1";
import Services1 from "../components/sections/services/services1/Services1";
import App from "../../src/App";
import Project1 from "../components/sections/projects/projects1/Project1";
import Items from "../components/sections/Items/items1/Items1";
import Statictics1 from "../components/sections/statistics/statistics1/Statictics1";

import "../assets/css/globals1.css";
const TrialDesign = () => {
  return (
    <div>
      <Navbar1 />
      <Hero1 />
      <Services1 />
      <Project1 />
      <Statictics1 />
      <Items />
    </div>
  );
};

export default TrialDesign;

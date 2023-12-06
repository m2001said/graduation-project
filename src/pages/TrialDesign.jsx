import React from "react";
import Navbar1 from '../components/sections/navbars/navbar1/Navbar1'
import Hero1 from "../components/sections/heros/hero1/Hero1";
import Services1 from "../components/sections/services/services1/Services1";
import App from "../../src/App";
import Project1 from '../components/sections/projects/projects1/Project1' 
import Articles from '../components/sections/Items/items1/Items1' 
import Statictics1 from '../components/sections/statistics/statistics1/Statictics1' 
import Team1 from "../components/sections/teams/teams1/Teams1"
import Pricing1 from "../components/sections/pricings/pricing1/Pricing1"
import Cta1 from "../components/sections/ctas/cta1/Cta1"
import Footer1 from "../components/sections/footers/footer1/Footer1"



const TrialDesign = () => {
  return (
    <div>
      <Navbar1/>
      <Hero1/> 
      <Services1/> 
      <Project1 />
      <Statictics1 />
      <Articles /> 
      <Team1 />
      <Pricing1 />
      <Cta1 />
      <Footer1 />
    </div>
  );
};

export default TrialDesign;

// TrialDesign1.jsx
import React from "react";
import TrialDesign from "./TrialDesign";
import Navbar1 from "../components/sections/navbars/navbar1/Navbar1";
import Hero1 from "../components/sections/heros/hero1/Hero1";
import Services1 from "../components/sections/services/services1/Services1";
import Project1 from "../components/sections/projects/projects1/Project1";
import Items1 from "../components/sections/items/items1/Items1";
import Statistics1 from "../components/sections/statistics/statistics1/Statistics1";
import Testimonials1 from "../components/sections/testimonials/testimonials1/Testimonials1";
import Featrue1 from "../components/sections/features/feature1/Featrue1";
import Logos1 from "../components/sections/logos/logos1/Logos1";
import Team1 from "../components/sections/teams/teams1/Teams1";
import Pricing1 from "../components/sections/pricings/pricing1/Pricing1";
import Cta1 from "../components/sections/ctas/cta1/Cta1";
import Footer1 from "../components/sections/footers/footer1/Footer1";
import "../assets/css/globals1.css";

const componentMapping1 = {
  services: Services1,
  projects: Project1,
  items: Items1,
  statistics: Statistics1,
  testimonials: Testimonials1,
  features: Featrue1,
  logos: Logos1,
  team: Team1,
  pricing: Pricing1,
  cta: Cta1,
};

const TrialDesign1 = () => {
  return (
    <TrialDesign
      className="design-1"
      componentMapping={componentMapping1}
      HeroComponent={Hero1}
      NavbarComponent={Navbar1}
      footerComponent={Footer1}
      template={1}
    />
  );
};

export default TrialDesign1;

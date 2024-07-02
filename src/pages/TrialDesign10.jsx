import React from "react";
import { useSelector } from "react-redux";

import "../assets/css/globals10.css";
import Navbar10 from "../components/sections/navbars/navbar10/Navbar10";
import Hero10 from "../components/sections/heros/hero10/Hero10";
import Services10 from "../components/sections/services/services10/Services10";
import Feature10 from "../components/sections/features/feature10/Feature10";
import Cta10 from "../components/sections/ctas/cta10/Cta10";
import Teams10 from "../components/sections/teams/teams10/Teams10";
import Testimonials10 from "../components/sections/testimonials/testimonials10/Testimonials10";
import Footer10 from "../components/sections/footers/footer10/Footer10";
import TrialDesign from "./TrialDesign";



 

  const componentMapping10 = {
    services: Services10,
    features: Feature10,
    team: Teams10,
    testimonials: Testimonials10,
    cta: Cta10,
  };

  const TrialDesign10 = () => {
  return <TrialDesign componentMapping={componentMapping10} HeroComponent={Hero10} NavbarComponent={Navbar10} FooterComponent={Footer10} template={"template10"} />;
};

export default TrialDesign10;












  
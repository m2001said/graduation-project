import React from "react";
import "../assets/css/globals17.css";
import "aos/dist/aos.css";
import Navbar17 from "../components/sections/navbars/navbar17/Navbar17";
import Hero17 from "../components/sections/heros/hero17/Hero17";
import Services17 from "../components/sections/services/services17/Services17";
import About17 from "../components/sections/about/about17/About17";
import Feature17 from "../components/sections/features/feature17/Feature17";
import Footer17 from "../components/sections/footers/footer17/Footer17";
import TrialDesign from "./TrialDesign";
const componentMapping = {
  services: Services17,
  about: About17,
  features: Feature17,
};

const TrialDesign17 = () => {
  return (
    <div>
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero17} NavbarComponent={Navbar17} FooterComponent={Footer17} template={17} />;
    </div>
  );
};

export default TrialDesign17;

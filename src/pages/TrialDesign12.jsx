import React from "react";
import "../assets/css/globals12.css";
import Navbar12 from "../components/sections/navbars/navbar12/Navbar12";
import Hero12 from "../components/sections/heros/hero12/Hero12";
import Feature12 from "../components/sections/features/feature12/Feature12";
import About12 from "../components/sections/abouts/about12/About12";
import Teams12 from "../components/sections/teams/teams12/Teams";
import Footer12 from "../components/sections/footers/footer12/Footer12";
import Contact12 from "../components/sections/contacts/contact12/Contact12";
import Testimonials12 from "../components/sections/testimonials/testimonials12/Testimonials12";

import TrialDesign from "./TrialDesign";

const TrialDesign12 = () => {
  const componentMapping = {
    features: Feature12,
    about: About12,
    team: Teams12,
    testimonials: Testimonials12,
    contact: Contact12,
  };
  return (
    <div>
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero12} NavbarComponent={Navbar12} FooterComponent={Footer12} template={12} />
    </div>
  );
};
export default TrialDesign12;

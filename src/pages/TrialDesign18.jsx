import React, { useEffect, useState } from "react";
import "../assets/css/globals18.css";
import Navbar18 from "../components/sections/navbars/navbar18/Navbar18";
import Hero18 from "../components/sections/heros/hero18/Hero18";
import Feature18 from "../components/sections/features/feature18/feature18";
import Services18 from "../components/sections/services/services18/Services18";
import Projects18 from "../components/sections/projects/projects18/Projects18";
import Testimonial18 from "../components/sections/testimonials/testimonials18/Testimonials18";
import Cta18 from "../components/sections/ctas/cta18/Cta18";
import Cta21 from "../components/sections/ctas/cta21/Cta21";
import Footer18 from "../components/sections/footers/footer18/Footer18";
import TrialDesign from "./TrialDesign";

const componentMapping18 = {
  features: Feature18,
  services: Services18,
  projects: Projects18,
  testimonials: Testimonial18,
  cta: Cta18,
  contact: Cta21,
};

const TrialDesign18 = () => {
  return <TrialDesign componentMapping={componentMapping18} HeroComponent={Hero18} NavbarComponent={Navbar18} FooterComponent={Footer18} template={18} />;
};

export default TrialDesign18;

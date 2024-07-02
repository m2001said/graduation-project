import React, { useEffect } from "react";
import "../assets/css/globals15.css";
import TrialDesign from "./TrialDesign";
import Navbar15 from "../components/sections/navbars/navbar15/Navbar15";
import Hero15 from "../components/sections/heros/hero15/Hero15";
import Services15 from "../components/sections/services/services15/Services15";
import Feature15 from "../components/sections/features/feature15/Feature15";
import Project15 from "../components/sections/projects/project15/Project15";
import Cta15 from "../components/sections/ctas/cta15/Cta15";
import Testimonials15 from "../components/sections/testimonials/testimonials15/Testimonials15";
import Pricing15 from "../components/sections/pricings/pricing15/Pricing15";
import Footer152 from "../components/sections/footers/footer15/footer152/Footer152"; //***********blogs */
import Contact15 from "../components/sections/contacts/contact15/Contact15";
import Footer15 from "../components/sections/footers/footer15/Footer15";

const componentMapping = {
  services: Services15,
  features: Feature15,
  projects: Project15,
  cta: Cta15,
  testimonials: Testimonials15,
  pricing: Pricing15,
  blogs: Footer152,
  contact: Contact15,
};

const TrialDesign15 = () => {
  return (
    <div className="TrialDesign15">
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero15} NavbarComponent={Navbar15} FooterComponent={Footer15} template={15} />;
    </div>
  );
};

export default TrialDesign15;

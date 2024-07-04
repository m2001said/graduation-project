import "../assets/css/globals11.css";
import TrialDesign from "./TrialDesign";
import React from "react";
import Navbar11 from "../components/sections/navbars/navbar11/Navbar11";
import Hero11 from "../components/sections/heros/hero11/Hero11";
import Services11 from "../components/sections/services/services11/Services11";
import Items11 from "../components/sections/items/items11/Items11";
import Testimonials11 from "../components/sections/testimonials/testimonials11/Testimonials11";
import Pricings11 from "../components/sections/pricings/pricing11/Pricing11";
import Project11 from "../components/sections/projects/project11/Project11";
import Cta11 from "../components/sections/ctas/cta11/Cta11";
import Feature11 from "../components/sections/features/feature11/Feature11";
import Contact11 from "../components/sections/contacts/contact11/Contact11";

const TrialDesign11 = () => {
  const componentMapping = {
    services: Services11,
    items: Items11,
    cta: Cta11,
    projects: Project11,
    pricing: Pricings11,
    testimonials: Testimonials11,
    features: Feature11,
    contact: Contact11,
  };
  return <TrialDesign className="TrialDesign11" componentMapping={componentMapping} HeroComponent={Hero11} NavbarComponent={Navbar11} template={11} />;
};

export default TrialDesign11;

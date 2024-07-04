/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import "../assets/css/globals14.css";
import TrialDesign from "./TrialDesign";
import Navbar14 from "../components/sections/navbars/navbar14/Navbar14";
import Hero14 from "../components/sections/heros/hero14/Hero14";
import Items14 from "../components/sections/items/items14/Items14";
import Services14 from "../components/sections/services/services14/Services14";
import Features14 from "../components/sections/features/feature14/Feature14";
import Projects14 from "../components/sections/projects/projects14/Projects14";
import Projects21 from "../components/sections/projects/projects21/Projects21";
import Logos14 from "../components/sections/logos/logos14/Logos14";
import Footer14 from "../components/sections/footers/footer14/Footer14";

const componentMapping14 = {
  items: Items14,
  services: Services14,
  featuers: Features14,
  projects: Projects14,
  blogs: Projects21,
  logos: Logos14,
};
const TrialDesign14 = () => {
  return (
    <TrialDesign
      className="design-14"
      componentMapping={componentMapping14}
      HeroComponent={Hero14}
      NavbarComponent={Navbar14}
      FooterComponent={Footer14}
      template={14}
    />
  );
};

export default TrialDesign14;

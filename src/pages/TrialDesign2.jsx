// TrialDesign2.jsx
import React from "react";
import "../assets/css/globals2.css";
import Services2 from "../../src/components/sections/services/services2/Service2";
import Navbar2 from "../components/sections/navbars/navbar2/Navbar2";
import Hero2 from "./../components/sections/heros/hero2/Hero2";
import Project2 from "../components/sections/projects/projects2/Project2";
import Testimonials2 from "../components/sections/testimonials/testimonials2/Testimonials2";
import ContactUs2 from "../components/sections/contacts/contact2/ContactUs2";
import Footer2 from "../../src/components/sections/footers/footer2/Footer2";
import TrialDesign from "./TrialDesign";
const componentMapping2 = {
  services: Services2,
  projects: Project2,
  testimonials: Testimonials2,
  contact: ContactUs2,
};

const TrialDesign2 = () => {
  return (
    <div className="trialdesign2">
      <TrialDesign componentMapping={componentMapping2} HeroComponent={Hero2} NavbarComponent={Navbar2} FooterComponent={Footer2} template={"template2"} />
    </div>
  );
};

export default TrialDesign2;

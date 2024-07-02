import React from "react";

import Navbar13 from "../../src/components/sections/navbars/navbar13/Navbar13";
import "../assets/css/globals13.css";
import About13 from "../components/sections/abouts/about13/About13";
import Feature13 from "../components/sections/features/feature13/Feature13";
import Footer13 from "../components/sections/footers/footer13/Footer13";
import Hero13 from "../components/sections/heros/hero13/Hero13";
import Projects13 from "../components/sections/projects/projects13/Projects13";
import Testimonials13 from "../components/sections/testimonials/testimonials13/Testimonials13";
import Logos13 from "../components/sections/logos/logos13/Logos13";
import Contact13 from "../components/sections/contacts/contact13/Contact13";
import TrialDesign from "./TrialDesign";

const TrialDesign13 = () => {
  const componentMapping = {
    about: About13,
    projects: Projects13,
    testimonials: Testimonials13,
    contact: Contact13,
    logos: Logos13,
    feature: Feature13,
  };
  return (
    <div className="trialdesign13">
      <main>
        <TrialDesign componentMapping={componentMapping} HeroComponent={Hero13} NavbarComponent={Navbar13} FooterComponent={Footer13} template={"template13"} />;
      </main>
    </div>
  );
};

export default TrialDesign13;

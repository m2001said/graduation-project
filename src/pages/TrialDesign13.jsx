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

const TrialDesign13 = () => {
  return (
    <div className="trialdesign13">
      <Navbar13 className="trialdesign13" />
      <main>
        <Hero13 className="trialdesign13" />
        <Feature13 className="trialdesign13" />
        <About13 className="trialdesign13" />
        <Testimonials13 className="trialdesign13" />

        <Projects13 className="trialdesign13" />
        <Contact13 className="trialdesign13" />
        <Logos13 className="trialdesign13" />
      </main>
      <Footer13 className="trialdesign13" />
    </div>
  );
};

export default TrialDesign13;

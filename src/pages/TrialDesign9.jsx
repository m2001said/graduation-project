import React from "react";
import Testimonials9 from "../components/sections/testimonials/testimonials9/Testimonials9";
import "../assets/css/globals9.css";
import Hero9 from "../components/sections/heros/hero9/Hero9";
import About9 from "../components/sections/abouts/about9/About9";
import Services9 from "../components/sections/services/services9/Services9";
import Footer9 from "../components/sections/footers/footer9/Footer9";
import Teams9 from "../components/sections/teams/teams9/Teams9";
import Feature9 from "../components/sections/features/feature9/Feature9";
import Contact9 from "../components/sections/contacts/contact9/Contact9";
import Pricing9 from "../components/sections/pricings/pricing9/Pricing9";
const TrialDesign9 = () => {
  return (
    <div className="trialdesign9">
      <main>
        <Hero9 className="trialdesign9" />
        <About9 className="trialdesign9" />
        <Pricing9 className="trialdesign9" />
        <Services9 className="trialdesign9" />

        <Feature9 className="trialdesign9" />
        <Teams9 className="trialdesign9" />
        <Testimonials9 className="trialdesign9" />
        <Contact9 className="trialdesign9" />

      </main>
      <Footer9 className="trialdesign9" />
    </div>
  );
};

export default TrialDesign9;

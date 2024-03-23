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
import { useSelector } from "react-redux";
const TrialDesign9 = () => {
  const state = useSelector((state) => state.template9);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    hero: Hero9,
    about: About9,
    pricing: Pricing9,
    services: Services9,
    features: Feature9,
    team: Teams9,
    testimonials: Testimonials9,
    contact: Contact9,
  };

  return (
    <div className="trialdesign9">
      <main>
        {reorderedComponents.map((_component) => {
          const Component = componentMapping[_component];
          return Component && <Component key={_component} className="trialdesign9" />;
        })}
      </main>
      <Footer9 className="trialdesign9" />
    </div>
  );
};

export default TrialDesign9;

import React from "react";
import "../assets/css/globals8.css";
import Navbar8 from "../components/sections/navbars/navbar8/Navbar8";
import Hero8 from "../components/sections/heros/hero8/Hero8";
import About8 from "../components/sections/abouts/about8/About8";
import Services8 from "../components/sections/services/services8/Services8";
import Contact8 from "../components/sections/contacts/contact8/Contact8";
import Project8 from "../components/sections/projects/project8/Project8";
import { useSelector } from "react-redux";
const TrialDesign8 = () => {
  const state = useSelector((state) => state.template8);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    about: About8,
    services: Services8,
    projects: Project8,
    contact: Contact8,
  };

  return (
    <div className="site-container8">
      <Navbar8/>
      <Hero8 />
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
    </div>
  );
};

export default TrialDesign8;

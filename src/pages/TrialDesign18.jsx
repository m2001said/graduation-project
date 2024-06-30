/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
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
import { useSelector } from "react-redux";

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
  return (
    <TrialDesign componentMapping={componentMapping18} HeroComponent={Hero18} NavbarComponent={Navbar18} FooterComponent={Footer18} template={"template18"} />
  );
};

export default TrialDesign18;





// const TrialDesign18 = () => {
//   ////  dark mode   ////////
//   const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
//   const element = document.documentElement;

  // useEffect(() => {
  //   if (theme === "dark") {
  //     element.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     element.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);
//   /////////////////////////
//   const state = useSelector((state) => state.template18);
//   const colors = state.colors;
//   useEffect(() => {
//     document.documentElement.style = "";
//       document.documentElement.style.setProperty("--primary18-color", colors.templateColors[0]);
//       document.documentElement.style.setProperty("--primary18-color-80", colors.templateColors[1]);
//       document.documentElement.style.setProperty("--secondary18-1-color", colors.templateColors[2]);
//       document.documentElement.style.setProperty("--secondary18-2-color", colors.templateColors[3]);
//       document.documentElement.style.setProperty("--dark18", colors.templateColors[4]);

//   }, []);

//   const reorderedComponents = Object.keys(state);
//   const componentMapping = {
//     features: Feature18,
//     services: Services18,
//     projects: Projects18,
//     testimonials: Testimonial18,
//     cta1: Cta18,
//     cta2: Cta21,

//   };
//   return (
//     <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
//       <Navbar18 theme={theme} setTheme={setTheme} />
//       <Hero18 theme={theme} />
//       {reorderedComponents.map((_component) => {
//         const Component = componentMapping[_component];
//         return Component && <Component key={_component} />;
//       })}
//       <Footer18 />
//     </div>
//   );
// };

// export default TrialDesign18;

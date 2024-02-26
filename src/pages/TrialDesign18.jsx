/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState } from "react";
import "../assets/css/globals18.css";
import Navbar18 from "../components/sections/navbars/navbar18/Navbar18";
import Hero18 from "../components/sections/heros/hero18/Hero18";
import Feature18 from "../components/sections/features/feature18/feature18";
import Services18 from "../components/sections/services/services18/Services18";
import Projects18 from "../components/sections/projects/projects18/Projects18";
import Testimonial18 from "../components/sections/testimonials/testimonials18/Testimonials18";
import Cta18_1 from "../components/sections/ctas/cta18_1/Cta18_1";
import Cta18_2 from "../components/sections/ctas/cta18_2/Cta18_2";
import Footer18 from "../components/sections/footers/footer18/Footer18";



const TrialDesign18 = () => {
  ////  dark mode   ////////
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  
  }, [theme]);
  /////////////////////////

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar18 theme={theme} setTheme={setTheme} />
      <Hero18 theme={theme} />
      <Feature18 />
      <Services18 />
      <Projects18 />
      <Testimonial18 />
      <Cta18_1 />
      <Cta18_2 />
      <Footer18 />
    </div>
  );
};

export default TrialDesign18;

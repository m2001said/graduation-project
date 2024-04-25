import React from "react";
import "../assets/css/globals17.css"
import  {useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar17 from "../components/sections/navbars/navbar17/Navbar17";
import Hero17 from "../components/sections/heros/hero17/Hero17";
import Services17 from "../components/sections/services/services17/Services17";
import About17 from "../components/sections/about/about17/About17";
import Banner17 from "../components/sections/banner17/Banner17";
import Footer17 from "../components/sections/footers/footer17/Footer17";
import Popup17 from "../components/sections/popup17/Popup17";
const TrialDesign17 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      eaasing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh();
  },[]);
  return <div>
    
    <Navbar17 HandlePopup={HandlePopup} />
      <Hero17 />
      <Services17 />
      <About17 HandlePopup={HandlePopup} />
      <Banner17 />
      <Footer17 />
      <Popup17 showPopup={showPopup} setShowPopup={setShowPopup} />
  </div>;
};

export default TrialDesign17;

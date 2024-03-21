import "../assets/css/globals11.css";
import React from "react";
import Navbar11 from "../components/sections/navbars/navbar11/Navbar11";
import Hero11 from "../components/sections/heros/hero11/Hero11";
import Services11 from "../components/sections/services/services11/Services11";
import Services112 from "../components/sections/services/services112/Services112";
import Testimonials11 from "../components/sections/testimonials/testimonials11/Testimonials11";
import Footer11 from "../components/sections/footers/footer11/Footer11";
import Pricings11 from "../components/sections/pricings/pricing11/Pricing11";
import Project11 from "../components/sections/projects/project11/Project11";
import Cta11 from "../components/sections/ctas/cta11/Cta11";
import Contact11 from "../components/sections/contacts/contact11/Contact11";

const TrialDesign11 = () => {
  return (
    <div>
      <>
        <Navbar11 />
        <main className="main">
          <Hero11 />
          <Services11 />
          <Services112 />
          <Cta11 />
          <Project11 />
          <Pricings11 />
          <Testimonials11 />
          <Footer11 />
          <Contact11 />
        </main>
      </>
    </div>
  );
};

export default TrialDesign11;

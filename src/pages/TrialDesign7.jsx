import React from "react";
import "../assets/css/globals7.css";
import styles from "../components/sections/heros/hero7/styles7/style";

import Navbar7 from "../components/sections/navbars/navbar7/Navbar7";
import Hero7 from "../components/sections/heros/hero7/Hero7";
import Stats7 from "../components/sections/statistics/statistics7/Statistics7";
import Feature7 from "../components/sections/features/feature7/Feature7";

import Feature72 from "../components/sections/features/feature72/Feature72";
import Feature73 from "../components/sections/features/feature73/Feature73";
import Testimonials7 from "../components/sections/testimonials/testimonials7/Testimonials7";
import Pricing7 from "../components/sections/pricings/pricing7/Pricing7";

import Cta7 from "../components/sections/ctas/cta7/Cta7";
import Footer7 from "../components/sections/footers/footer7/Footer7";

const TrialDesign7 = () => {
  return (
    <div className="TrialDesign7">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar7 />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <Hero7 />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>


          <Stats7 />
          <Feature7 />
          <Feature72 />
          <Feature73 />
          <Testimonials7 />
          <Pricing7 />
          <Cta7 />
          <Footer7 />
        </div>
      </div>
    </div>
  );
};

export default TrialDesign7;

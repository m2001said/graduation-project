import React from "react";
import "../assets/css/globals7.css";
import styles from "../components/sections/heros/hero7/styles7/style";
import Navbar7 from "../components/sections/navbars/navbar7/Navbar7";
import Hero7 from "../components/sections/heros/hero7/Hero7";
import Stats7 from "../components/sections/statistics/statistics7/Stats7";
import Business7 from "../components/sections/features/feature7/feature71/Business7";
import Billing7 from "../components/sections/features/feature7/fearure72/Billing7";
import CardDeal7 from "../components/sections/features/feature7/feature73/CardDeal7";
import Testimonials7 from "../components/sections/testimonials/testimonials7/Testimonials7";
import Clients7 from "../components/sections/pricings/pricing7/Clients7";
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
          <Business7 />
          <Billing7 />
          <CardDeal7 />
          <Testimonials7 />
          <Clients7 />
          <Cta7 />
          <Footer7 />
        </div>
      </div>
    </div>
  );
};

export default TrialDesign7;

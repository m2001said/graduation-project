import React from "react";
import { useSelector } from "react-redux";

import "../assets/css/globals10.css";
import Navbar10 from "../components/sections/navbars/navbar10/Navbar10";
import Hero10 from "../components/sections/heros/hero10/Hero10";
import Services10 from "../components/sections/services/services10/Services10";
import Feature10 from "../components/sections/features/feature10/Feature10";
import Cta10 from "../components/sections/ctas/cta10/Cta10";
import Teams10 from "../components/sections/teams/teams10/Teams10";
import Testimonials10 from "../components/sections/testimonials/testimonials10/Testimonials10";
import Footer10 from "../components/sections/footers/footer10/Footer10";
import OrderPopup10 from "../components/sections/orderPopups/orderPopup10/OrderPopup10";

// import AOS from "aos";
// import "aos/dist/aos.css";

const TrialDesign10 = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  //   React.useEffect(() => {
  //     AOS.init({
  //       offset: 100,
  //       duration: 800,
  //       easing: "ease-in-sine",
  //       delay: 100,
  //     });
  //     AOS.refresh();
  //   }, []);

  const state = useSelector((state) => state.template10);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    services: Services10,
    features: Feature10,
    team: Teams10,
    testimonials: Testimonials10,
    cta: Cta10,
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar10 handleOrderPopup={handleOrderPopup} />
        <Hero10 handleOrderPopup={handleOrderPopup} />
        {/*  <Services10 handleOrderPopup={handleOrderPopup} />
        <Feature10 />
        <Cta10 />
        <Teams10 />
        <Testimonials10 /> */}
        {reorderedComponents.map((_component) => {
          const Component = componentMapping[_component];
          return Component && <Component key={_component} handleOrderPopup={handleOrderPopup} />;
        })}
        <Footer10 />
        <OrderPopup10 orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default TrialDesign10;

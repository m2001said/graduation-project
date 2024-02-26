/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "../assets/css/globals14.css";
import { useSelector } from "react-redux";

import Navbar14 from "../components/sections/navbars/navbar14/Navbar14";
import Hero14 from "../components/sections/heros/hero14/Hero14";
import Items14 from "../components/sections/Items/items14/Items14";
import Services14 from "../components/sections/services/services14/Services14";
import Features14 from "../components/sections/features/feature14/Feature14";
import Projects14_1 from "../components/sections/projects/projects14_1/Projects14_1";
import Projects14_2 from "../components/sections/projects/projects14_2/Projects14_2";
import Logos14 from "../components/sections/logos/logos14/Logos14";
import Footer14 from "../components/sections/footers/footer14/Footer14";
import Popup14 from "../components/sections/orderPopups/orderPopups14/OrderPopups14";




const TrialDesign14 = () => {

  const { feature14_1 } = useSelector((state) => state.template14);
  const { feature14_2 } = useSelector((state) => state.template14);

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar14 handleOrderPopup={handleOrderPopup} />
      <Hero14 handleOrderPopup={handleOrderPopup} />
      <Items14 />
      <Services14 />
      <Features14 data={feature14_1} />
      <Projects14_1 />
      <Features14 data={feature14_2} />
      <Projects14_2 />
      <Logos14 />
      <Footer14 />
      <Popup14 orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default TrialDesign14;

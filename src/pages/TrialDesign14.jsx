import React from "react";
import "../assets/css/globals14.css";

import Navbar14 from "../components/sections/navbars/navbars14/Navbar14";
import Hero14 from "../components/sections/heros/hero14/Hero14";
import Items14 from "../components/sections/Items/items14/Items14";
import Services14 from "../components/sections/services/services14/Services14";
import Features14 from "../components/sections/features/features14/Feature14";
import Projects14_1 from "../components/sections/projects/projects14_1/Projects14_1";
import Projects14_2 from "../components/sections/projects/projects14_2/Projects14_2";
import Logos14 from "../components/sections/logos/logos14/Logos14";
import Footer14 from "../components/sections/footers/footer14/Footer14";
import Popup14 from "../components/sections/orderPopups/orderPopups14/OrderPopups14";

import headphone from "../assets/images/img10/hero/headphone.png";
import smartwatch2 from "../assets/images/img10/category/smartwatch2-removebg-preview.png";


const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};


const TrialDesign14 = () => {
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
      <Features14 data={BannerData} />
      <Projects14_1 />
      <Features14 data={BannerData2} />
      <Projects14_2 />
      <Logos14 />
      <Footer14 />
      <Popup14 orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default TrialDesign14;

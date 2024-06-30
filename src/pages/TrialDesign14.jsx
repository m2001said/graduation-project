/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import "../assets/css/globals14.css";
import TrialDesign from "./TrialDesign";
import Navbar14 from "../components/sections/navbars/navbar14/Navbar14";
import Hero14 from "../components/sections/heros/hero14/Hero14";
import Items14 from "../components/sections/items/items14/Items14";
import Services14 from "../components/sections/services/services14/Services14";
import Features14 from "../components/sections/features/feature14/Feature14";
import Projects14 from "../components/sections/projects/projects14/Projects14";
import Projects21 from "../components/sections/projects/projects21/Projects21";
import Logos14 from "../components/sections/logos/logos14/Logos14";
import Footer14 from "../components/sections/footers/footer14/Footer14";
// import Popup14 from "../components/sections/orderPopups/orderPopups14/OrderPopups14";


  const componentMapping14 = {
    items: Items14,
    services: Services14,
    featuers: Features14,
    products: Projects14,
    // offer2: Features14,
    blogs: Projects21,
    logos: Logos14,
  };
const TrialDesign14 = () => {
  return <TrialDesign componentMapping={componentMapping14} HeroComponent={Hero14} NavbarComponent={Navbar14} FooterComponent={Footer14} template={"template14"} />;
};



export default TrialDesign14;





// const TrialDesign14 = () => {
//   const feature1 = useSelector((state) => state.template14.offer1);
//   const feature2 = useSelector((state) => state.template14.offer2);

//   const [orderPopup, setOrderPopup] = React.useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   const state = useSelector((state) => state.template14);
//   const colors = state.colors;
//   useEffect(() => {
//     document.documentElement.style = "";
//       document.documentElement.style.setProperty("--primary14-color", colors.templateColors[0]);
//       document.documentElement.style.setProperty("--brand14-yellow", colors.templateColors[1]);
//       document.documentElement.style.setProperty("--brand14-green", colors.templateColors[2]);
//       document.documentElement.style.setProperty("--brand14-blue", colors.templateColors[3]);
//       document.documentElement.style.setProperty("--brand14-gray", colors.templateColors[4]);
//       document.documentElement.style.setProperty("--brand14-white", colors.templateColors[5]);

//   }, []);

//   const reorderedComponents = Object.keys(state);
//   const componentMapping = {
//     items: Items14,
//     services: Services14,
//     offer1: Features14,
//     products: Projects14,
//     offer2: Features14,
//     blogs: Projects21,
//     logos: Logos14,
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
//       <Navbar14 handleOrderPopup={handleOrderPopup} />
//       <Hero14 handleOrderPopup={handleOrderPopup} />
//       {reorderedComponents.map((_component) => {
//         const data = _component === "offer1" ? feature1 : feature2;
//         const bgColor = _component === "offer1" ? "#f42c37" : "#2dcc6f";   //******************** */ must be import from web colors in root not constant
//         const Component = componentMapping[_component];
//         return Component && <Component key={_component} data={data} bgColor={bgColor} />;
//       })}
//       <Footer14 />
//       <Popup14 orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//     </div>
//   );
// };


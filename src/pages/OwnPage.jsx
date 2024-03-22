// import TopSide from "./../components/dashboard/sections/TopSide";
// import LeftSide from "../components/dashboard/sections/LeftSide";
// import React from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";

// const importComponent = (type, index) => {
//   let module = null;
//   try {
//     if (index) {
//       // Try the first pattern
//       module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
//     }
//   } catch (error) {
//     // console.error(`First pattern failed: ${error.message}`);
//     try {
//       module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}s${index}`);
//     } catch (error) {
//       // console.error(`Second pattern failed: ${error.message}`);
//     }
//   }
//   return module && module.default ? module.default : null;
// };

// const OwnPage = () => {
//   const location = useLocation();
//   const selectedData = location.state || {};
//   const ownTemplate = useSelector((state) => state.ownTemplate);

//   const renderComponent = (type, index) => {
//     const Component = importComponent(type, index);
//     return Component ? <Component key={`${type}-${index}`} /> : null;
//   };

//   // Define the list of section types
//   const sectionTypes = [
//     "navbar",
//     "hero",
//     "contact",
//     "cta",
//     "footer",
//     "feature",
//     "logo",
//     "pricing",
//     "project",
//     "service",
//     "team",
//     "statistic",
//     "item",
//     "cartItem",
//     "filterItem",
//     "orderPopup",
//     "testimonial",
//   ];
//   const sectionNames = [
//     "navbar",
//     "hero",
//     "contact",
//     "cta",
//     "footer",
//     "features",
//     "logos",
//     "pricing",
//     "projects",
//     "services",
//     "team",
//     "statistics",
//     "items",
//     "cartItem",
//     "filterItem",
//     "orderPopup",
//     "testimonials",
//   ];
//   return (
//     <>
//       <section className="dashboard-container mx-auto relative">
//         <TopSide />
//         <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
//           <LeftSide targetTemplate={ownTemplate} updateAllRef={ownTemplateActions} />
//           <div className="max-md:w-full md:w-70 flex-auto  flex justify-start flex-col items-center text-black p-2" style={{ height: "calc(100vh - 56px)" }}>
//             <div className="w-full border border-slate-300 shadow  md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative">
//               {sectionTypes.map((type , index) => renderComponent(type, selectedData[`${sectionNames[index]}IndexSelected`]))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OwnPage;

import React from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";

const importComponent = (type, index) => {
  let module = null;
  try {
    if (index) {
      module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
    }
  } catch (error) {
    try {
      module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}s${index}`);
    } catch (error) {
      try {
        module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
      } catch (error) {
        console.error(`third pattern failed: ${error.message}`);
      }
    }
  }
  return module && module.default ? module.default : null;
};

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};
  const ownTemplate = useSelector((state) => state.ownTemplate);

  const renderComponent = (type, index) => {
    const Component = importComponent(type, index);
    return Component ? <Component key={`${type}-${index}`} /> : null;
  };

  const sectionNames = [
    'navbars', 'heros', 'features', 'abouts', 'projects', 'services', 'contacts', 'teams',
    'testimonials', 'statistics', 'logos', 'items', 'gallerys', 'offers', 'reservations', 'menus', 'cartItems', 'filterItems',
    'orderPopups', 'chooses', 'pricings', 'ctas', 'footers',
  ];
  // Define the list of section types
  const sectionTypes = [
    'navbar', 'hero', 'feature', 'about', 'project', 'service', 'contact', 'team',
    'testimonial', 'statistic', 'logo', 'item', 'gallery', 'offer', 'reservation', 'menu', 'cartItem', 'filterItem',
    'orderPopup', 'choose', 'pricing', 'cta', 'footer',
  ];

  return (
    <>
      {sectionTypes.map((type, index) => renderComponent(type, selectedData[`${sectionNames[index]}IndexSelected`]))}
    </>
  );
};

export default OwnPage;

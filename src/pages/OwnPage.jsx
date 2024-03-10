import React from 'react';
import { useLocation } from 'react-router-dom';

const importComponent = (type, index) => {
  let module = null;
  try {
    if (index) {
      module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
    }
  } catch (error) {
    console.error(`First pattern failed: ${error.message}`);
    try {
      module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}s${index}`);
    } catch (error) {
      console.error(`Second pattern failed: ${error.message}`);
    }
  }
  return module && module.default ? module.default : null;
};


const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  const renderComponent = (type, index) => {
    const Component = importComponent(type, index);
    return Component ? <Component key={`${type}-${index}`} /> : null;
  };

  const sectionNames = [
    'heros', 'testimonials', 'footers', 'navbars', 'features', 'ctas', 'pricings',
    'projects', 'services', 'teams', 'statistics', 'contacts', 'logos',
    'items', 'cartItems', 'filterItems', 'orderPopups',
  ];
  // Define the list of section types
  const sectionTypes = [
    'hero', 'testimonial', 'footer', 'navbar', 'feature', 'cta', 'pricing',
    'project', 'service', 'team', 'statistic', 'contact', 'logo',
    'item', 'cartItem', 'filterItem', 'orderPopup',
  ];

  return (
    <>
      {sectionTypes.map((type, index) => renderComponent(type, selectedData[`${sectionNames[index]}IndexSelected`]))}
    </>
  );
};

export default OwnPage;

import React from 'react';
import { useLocation } from 'react-router-dom';

const importComponent = (type, index) => {
  let module = null;
  try {
    if (index) {
      // Try the first pattern
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

  // Define the list of section types
  const sectionTypes = [
    'navbar', 'hero', 'contact', 'cta', 'footer',
    'feature', 'logo', 'pricing', 'project', 'service',
    'team', 'statistic', 'item', 'cartItem', 'filterItem',
    'orderPopup', 'testimonial'
  ];

  return (
    <>
      {sectionTypes.map((type) => renderComponent(type, selectedData[`${type}IndexSelected`]))}
    </>
  );
};

export default OwnPage;

import React from 'react';
import { useLocation } from 'react-router-dom';

const importComponent = (type, index) => {
  try {
    if (index) {
      // Use require only if the module exists
      const module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
      return module.default ? module.default : null;
    }
  } catch (error) {
    console.error(error.message);
  }
  return null;
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

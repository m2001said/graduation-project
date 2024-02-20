import React from 'react';
import { useLocation } from 'react-router-dom';

const importComponent = (type, index) => {
  try {
    if (index) {
      // Use require only if the module exists
      const module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
      return module.default;
    }
  } catch (error) {
    console.error(error.message);
  }
  return null;
}

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  const renderComponent = (Component, index) => {
    return Component ? <Component /> : null;
  };

  return (
    <>
      {renderComponent(importComponent('navbar', selectedData.navIndexSelected), selectedData.navIndexSelected)}
      {renderComponent(importComponent('hero', selectedData.heroIndexSelected), selectedData.heroIndexSelected)}
      {renderComponent(importComponent('contact', selectedData.contactIndexSelected), selectedData.contactIndexSelected)}
      {renderComponent(importComponent('cta', selectedData.ctaIndexSelected), selectedData.ctaIndexSelected)}
      {renderComponent(importComponent('footer', selectedData.footerIndexSelected), selectedData.footerIndexSelected)}
    </>
  );
};

export default OwnPage;

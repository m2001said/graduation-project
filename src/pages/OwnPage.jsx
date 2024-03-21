import React from 'react';
import { useLocation } from 'react-router-dom';

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

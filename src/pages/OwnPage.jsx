import React from 'react';
import { useLocation } from 'react-router-dom';

const importComponent = (type, index) => {
  return require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`).default;
}

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  // if Selected are defined, otherwise set them to default values
  const {heroIndexSelected = 1, ctaIndexSelected = 1, footerIndexSelected = 1, navIndexSelected = 1,contactIndexSelected=1} = selectedData;

  // Import components 
  const Hero = importComponent('hero', heroIndexSelected);
  const Cta = importComponent('cta', ctaIndexSelected);
  const Footer = importComponent('footer', footerIndexSelected);
  const Nav = importComponent('navbar', navIndexSelected);
  const Contact = importComponent('contact', contactIndexSelected);
//contactIndexSelected
  return (
    <>
      <Nav />
      <Hero />
      <Contact />
      <Cta />    
      <Footer />
    </>
  );
};

export default OwnPage;
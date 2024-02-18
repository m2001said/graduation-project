import React from 'react';
import { useLocation } from 'react-router-dom';

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  // if Selected are defined, otherwise set them to default values
  const heroIndexSelected = selectedData.heroIndexSelected || 1;
  const testimonialIndexSelected = selectedData.testimonialIndexSelected || 1;
  const footerIndexSelected = selectedData.footerIndexSelected || 1;

  // Import components 
  const Hero = require(`../components/sections/heros/hero${heroIndexSelected}/Hero${heroIndexSelected}`).default;
  const Testimonial = require(`../components/sections/testimonials/testimonials${testimonialIndexSelected}/Testimonials${testimonialIndexSelected}`).default;
  const Footer = require(`../components/sections/footers/footer${footerIndexSelected}/Footer${footerIndexSelected}`).default;

  return (
    <div>
      <Hero />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default OwnPage;

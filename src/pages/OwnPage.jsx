import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  // Check if heroIndexSelected and testimonialIndexSelected are defined, otherwise set them to default values
  const heroIndexSelected = selectedData.heroIndexSelected || 1;
  const testimonialIndexSelected = selectedData.testimonialIndexSelected || 1;
  const footerIndexSelected = selectedData.footerIndexSelected || 1;
  
  // Use import() for dynamic import
  const Hero = lazy(() => import(`../components/sections/heros/hero${heroIndexSelected}/Hero${heroIndexSelected}`).then(module => ({ default: module.default })));
  const Testimonial = lazy(() => import(`../components/sections/testimonials/testimonials${testimonialIndexSelected}/Testimonials${testimonialIndexSelected}`).then(module => ({ default: module.default })));
  const Footer = lazy(() => import(`../components/sections/footers/footer${footerIndexSelected}/Footer${footerIndexSelected}`).then(module => ({ default: module.default })));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Testimonial />
      <Footer />
    </Suspense>
  );
};

export default OwnPage;

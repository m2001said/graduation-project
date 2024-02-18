import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};

  // Check if heroIndexSelected and testimonialIndexSelected are defined, otherwise set them to default values
  const heroIndexSelected = selectedData.heroIndexSelected !== undefined ? selectedData.heroIndexSelected : 1;
  const testimonialIndexSelected = selectedData.testimonialIndexSelected !== undefined ? selectedData.testimonialIndexSelected : 1;

  // Use import() for dynamic import
  const Hero = React.lazy(() => import(`../components/sections/heros/hero${heroIndexSelected}/Hero${heroIndexSelected}`).then(module => ({ default: module.default })));
  const Testimonial = React.lazy(() => import(`../components/sections/testimonials/testimonials${testimonialIndexSelected}/Testimonials${testimonialIndexSelected}`).then(module => ({ default: module.default })));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Testimonial />
    </React.Suspense>
  );
};

export default OwnPage;
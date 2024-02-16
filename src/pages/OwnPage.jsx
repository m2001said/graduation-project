import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OwnPage = () => {
  const location = useLocation();
  const { selectedData } = location.state || {};

  console.log(selectedData.indexSelected);

  // Use import() for dynamic import
  const Hero = React.lazy(() => import(`../components/sections/heros/hero${selectedData.indexSelected}/Hero${selectedData.indexSelected}`).then(module => ({ default: module.default })));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </React.Suspense>
  );
};

export default OwnPage;

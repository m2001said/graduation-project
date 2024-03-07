import React, { useState } from 'react';
import "./loader.css"
import logo from "../../assets/images/mainPageAssets/logo.svg"
const ImageLoader = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div
          className="loader absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200"
        >
          <img src={logo} className="scale-up-center " />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={` object-cover ${isLoading ? 'hidden' : 'block'}`}
      />
    </div>
  );
};

export default ImageLoader;

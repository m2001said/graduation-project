// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";


const Logos14 = () => {

  // const { logos } = useSelector((state) => state.template14);
  const { pathname } = useLocation();
  const logos = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.logos;
    } else {
      return state.template14.logos;
    }
  });
  return (
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container14">
        <div className="flex flex-wrap justify-center gap-20 opacity-50">
          {logos.companies.map((logo, index) => (
            <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} style={{ maxWidth: "120px" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos14;

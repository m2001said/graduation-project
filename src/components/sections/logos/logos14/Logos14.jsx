// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";


const Logos14 = () => {

  const { logos } = useSelector((state) => state.template14);

  return (
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container14">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          {logos.companies.map((logo, index) => (
            <img key={index} src={logo.imgUrl} alt={`Logo ${index + 1}`} style={{ maxWidth: "200px" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos14;

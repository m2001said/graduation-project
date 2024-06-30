// eslint-disable-next-line no-unused-vars
import React from "react";



const Logos14 = ({template}) => {

    const logos = template.logos;

  return (
    <div className="py-8 pt-12 hidden md:block bg-[--website-14-color-5] dark:bg-[--website-14-color-5]">
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

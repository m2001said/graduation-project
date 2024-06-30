// eslint-disable-next-line no-unused-vars
import React from "react";


const Features = ({template}) => {
const feature = template.features;


  return (
    <div className="dark:bg-[--website-18-color-5] dark:text-white bg-[--website-18-color-2] sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container18">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img src={feature.imgUrl} alt="" className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
          </div>
          <div>
            <div className="space-y-5 sm:p-12 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">{feature.title}</h1>
              <p className="leading-8 tracking-wide text-base">{feature.subTitle}</p>
              <p className="text-base">{feature.description}</p>
              <button className="button-outline ">{feature.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

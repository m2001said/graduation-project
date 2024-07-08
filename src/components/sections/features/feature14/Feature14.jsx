import React from "react";
import { useSelector } from "react-redux";

const Feature14 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const featuers = template ? template.featuers : ownFooter;

  return (
    <div className="bg-[--website-14-color-6] min-h-[550px] flex justify-center items-center py-12 bg-white dark:bg-gray-900">
      <div className="container14">
        <div className="bg-[--website-14-color-1] grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{featuers.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">{featuers.title}</h1>
            <p className="text-sm">{featuers.date}</p>
          </div>
          {/* second col */}
          <div className="h-full flex items-center">
            <img src={featuers.imgUrl} alt="" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover" />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{featuers.subtitle}</p>
            <p className=" text-3xl sm:text-5xl font-bold">{featuers.text}</p>
            <p className="text-sm tracking-wide leading-5">{featuers.description}</p>
            <div>
              <button className="bg-[--website-14-color-6] text-[--website-14-color-1] py-2 px-4 rounded-full">{featuers.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature14;

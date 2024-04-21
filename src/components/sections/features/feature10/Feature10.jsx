/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";
import { useLocation } from "react-router";

const Feature10 = () => {
  
  const { pathname } = useLocation();
  const feature = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template10.features;
    }
  });

  return (
    <>
      <div className="py-10 bg-[--white10] dark:bg-gray-900">
        <div className="items-center py-6 px-10 sm:p-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            {/* image sec */}
            <div>
              <img src={feature.imgUrl} alt="" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
            </div>
            {/* txt sec */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold">{feature.title}</h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">{feature.description} </p>
              <div className="flex flex-col gap-4">
                {feature.features.map((data, index) => (
                  <div className="flex items-center gap-4">
                    <div className={`feature10-divIcon`}>
                      <img src={data.icon} alt="" className="w-full rounded-full" />
                    </div>
                    <p className="text-base font-sans">{data.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature10;

import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";


const Services14 = () => {
  // const { services } = useSelector((state) => state.template14);
  const { pathname } = useLocation();
  const services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template14.services;
    }
  });
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container14 my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {services.services.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              <img src={data.imgUrl} alt="" className="w-[50px]" />
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services14;

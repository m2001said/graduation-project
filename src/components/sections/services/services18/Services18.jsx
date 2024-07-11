import React from "react";
import { useSelector } from "react-redux";


const Services = ({template}) => {
  const ownServices = useSelector((state) => state.ownTemplate.services);
  const services = template ? template.services : ownServices;
  
  return (
    <>
      <span id="about"></span>
      <div className="bg-[--website-18-color-6] dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container18">
          <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif text-[--website-18-color-5] dark:text-[--website-18-color-6]">
              {services.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.services.map((data) => (
              <div
                key={data.title}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-[--website-18-color-5]  hover:bg-[--website-18-color-1] duration-300 text-white hover:text-black rounded-lg dark:bg-gray-900 dark:text-white dark:hover:text-white"
              >
                <div className="grid place-items-center">
                  <img src={data.icon} alt="" className="w-8" />
                </div>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.linkText} className="inline-block text-lg font-semibold py-3 duration-300">
                  {data.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

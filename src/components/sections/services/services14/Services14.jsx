import React from "react";



const Services14 = ({template}) => {
     const services = template.services;

  return (
    <div className="bg-[--website-14-color-6] dark:bg-gray-900 dark:text-white">
      <div className="container14 py-14 md:py-20">
        <div className="flex justify-center flex-wrap gap-6 gap-y-8">
          {services.services.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              <img src={data.icon} alt="" className="w-[50px]" />
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

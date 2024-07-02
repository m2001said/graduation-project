import React from "react";
import "../../../../assets/css/globals10.css";

const Services10 = ({ template }) => {
    const services = template.services;

  return (
    <>
      <div className="py-10 bg-[--website-10-color-2] dark:bg-gray-900 dark:text-white">
        <div className="items-center p-7 sm:p-30">
          {/* head sec */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="smHeader10 text-sm bg-clip-text text-transparent">{services.subtitle}</p>
            <h1 className="text-3xl font-bold">{services.title}</h1>
            <p className="text-xs text-gray-400">{services.description}</p>
          </div>
          {/* card sec */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"> */}
          <div className="flex flex-wrap place-content-center gap-20 md:gap-5">
            {services.services.map((service) => (
              <div className="my-7 rounded-2xl bg-white bgHover10 dark:bg-gray-800 dark:hover:bg-blue-600 hover:text-white relative shadow-xl duration-high group max-w-[300px] min-w-[300px]">
                <div className="h-[100px]">
                  <img
                    src={service.imgUrl}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-0">
                    <img src={services.icon} alt="" className="w-6" />
                    <img src={services.icon} alt="" className="w-6" />
                    <img src={services.icon} alt="" className="w-6" />
                    <img src={services.icon} alt="" className="w-6" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{service.description}</p>
                  <button className="btnBg10 btnTxt10 hover:scale-105 duration-300 py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-blue-600">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services10;

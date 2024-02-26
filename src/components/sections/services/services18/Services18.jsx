import React from "react";
import { useSelector } from "react-redux";


const Services = () => {
  const { services18 } = useSelector((state) => state.template18);

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container18">
          <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">{services18.title}</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services18.blocks.map((data) => (
              <div
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-[--dark18]  hover:bg-[--primary18-color] duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">
                  <img src={data.icon} alt="" className="w-8" />
                </div>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">
                  {data.auther}
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

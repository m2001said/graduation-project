import React from "react";
import { useSelector } from "react-redux";

const Feature9 = () => {
  const neighborhoods = useSelector((state) => state.template9.neighborhoods);

  return (
    <main className=" justify-center  bg-gradient-to-t from-[var(--primary-text-color)] to-[var(--color-color-blue-9)] feature-9">
      {" "}
      <span className="flex justify-center items-center pb-12">
        <button className="bg-gradient-to-r from-[var(--button-bg-gradient-from)] to-[var(--button-bg-gradient-to]) rounded-full h-12 w-12 cursor-auto"></button>
      </span>
      <p className="text-primary-text-color uppercase md:text-xl text-lg">Areas across the town</p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12">Neighborhood Properties</h1>
      <section className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-4 pb-12 section-9 justify-center md:text-left ">
        {neighborhoods.map((neighborhood) => (
          <div key={neighborhood.id} className="relative md:col-span-3">
            <img src={neighborhood.image} alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[var(--white-9)] md:text-5xl text-xl font-semibold md:pb-3">{neighborhood.properties}</p>
              <p className="text-[var(--white-9)] lg:text-xl md:text-base text-sm">
                {neighborhood.city}, {neighborhood.state}
              </p>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Feature9;

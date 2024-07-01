import React from "react";
import { useSelector } from "react-redux";

const Feature9 = ({ template }) => {
  const features = template.features;

  return (
    <main className=" justify-center  bg-gradient-to-t from-[var(--website-9-color-3)] to-[var(--website-9-color-1)] feature-9">
      {" "}
      <span className="flex justify-center items-center pb-12">
        <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1]) rounded-full h-12 w-12 cursor-auto"></button>
      </span>
      <p className="text-primary-text-color text-[var(--website-9-color-3)] uppercase md:text-xl text-lg">{features.title}</p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12">{features.subtitle}</h1>
      <section className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-4 pb-12 section-9 justify-center md:text-left ">
        {features.features.map((items,index) => (
          <div key={index} className="relative md:col-span-3">
            <img src={items.imgUrl} alt="" className="rounded-3xl object-cover md:h-80 h-40 w-full" />
            <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
              <p className="text-[var(--website-9-color-1)] md:text-5xl text-xl font-semibold md:pb-3">{items.title}</p>
              <p className="text-[var(--website-9-color-1)] lg:text-xl md:text-base text-sm">
                {items.subtitle}, {items.description}
              </p>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Feature9;






import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Card = ({ title, description, percentage }) => (
  <div className="w-full">
    <span className="w-full flex items-center justify-between">
      <p className="text-21px font-bold m-0 feat15_4">{title}</p>
      <p className="font-bold feat15_7">
        {percentage} <span className="feat15_6">%</span>
      </p>
    </span>
    <p className="pb-6 feat15_5">{description}</p>
  </div>
);

const Feature15 = () => {
  // const feature = useSelector((state) => state.template15.features);
  const { pathname } = useLocation();
  const feature = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template15.features;
    }
  });

  return (
    <main className="pt-52 px-3 feat15" id="skills">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-44px text-3xl text-center m-0 feat15_1">{feature.title}</h1>
        <p className="font-bold text-sm flex items-center justify-center gap-4 mb-15px ml-auto mt-5 mb-5 text-90px feat15_2">{feature.subtitle}</p>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-90">
          {feature.features.map((item, index) => (
            <Card key={index} title={item.title} percentage={item.percentage} description={item.description} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Feature15;

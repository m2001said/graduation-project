import React from "react";
import { useSelector } from "react-redux";

const Card = ({ title, paragraf, percentage }) => (
  <div className="w-full">
    <span className="w-full flex items-center justify-between">
      <p className="text-21px font-bold m-0 feat15_4">{title}</p>
      <p className="font-bold feat15_7">
        {percentage} <span className="feat15_6">%</span>
      </p>
    </span>
    <p className="pb-6 feat15_5">{paragraf}</p>
  </div>
);

const Feature15 = () => {
  const { feature } = useSelector((state) => state.template15);

  return (
    <main className="pt-52 px-3 feat15" id="skills">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-44px text-3xl text-center m-0 feat15_1">{feature.titles.title}</h1>
        <p className="font-bold text-sm flex items-center justify-center gap-4 mb-15px ml-auto mt-5 mb-5 text-90px feat15_2">{feature.titles.subtitle}</p>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-90">
          {feature.items.map((item, index) => (
            <Card key={index} title={item.title} percentage={item.percentage} paragraf={item.paragraf} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Feature15;

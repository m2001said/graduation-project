import React from "react";
import { useSelector } from "react-redux";

const Card = ({ title, paragraf, index }) => {
  const actualPercentage = useSelector((state) => state.template15.feature.percentage[`percentage${index + 1}`]);

  return (
    <div className="w-full">
      <span className="w-full flex items-center justify-between">
        <p className="text-21px font-bold m-0 feat15_4">{title}</p>
        <p className="font-bold feat15_7">
          {actualPercentage} <span className="feat15_6">%</span>
        </p>
      </span>
      <p className="pb-6 feat15_5">{paragraf}</p>
    </div>
  );
};

const Feature15 = () => {
  const { feature } = useSelector((state) => state.template15);

  return (
    <main className="pt-52 px-3" id="skills">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-44px text-3xl text-center m-0 feat15_1">{feature.title.title1}</h1>
        <p className="font-bold text-sm flex items-center justify-center gap-4 mb-15px ml-auto mt-10 text-40px feat15_2">
          {feature.title.title2} <span className="caveat text-3xl mb-15px feat15_3">{feature.title.title3}</span>
        </p>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-90">
          {Object.keys(feature.sub_title).map((key, index) => (
            <Card key={index} title={feature.sub_title[key]} percentage={feature.percentage[key]} paragraf={feature.paragraf} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Feature15;

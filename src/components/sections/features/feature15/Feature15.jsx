import React from "react";
import { useSelector } from "react-redux";

const Feature15 = () => {
  const { feature15 } = useSelector((state) => state.template15);

  const Card = ({ title, percentage }) => {
    return (
      <div className="w-full">
        <span className="w-full flex items-center justify-between">
          <p className="text-[21px] font-bold m-0 feat15_4">{title}</p>
          <p className="font-bold feat15_7">
            {percentage} <span className="feat15_6">{feature15[0].title.presntage}</span>
          </p>
        </span>
        <p className=" pb-6 feat15_5">{feature15[0].paragraf}</p>
      </div>
    );
  };
  return (
    <main className="pt-52  px-3" id="skills">
      <div className="flex flex-col items container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 feat15_1">{feature15[0].title.title1}</h1>
        <p className="font-bold text-sm  flex items-center text-center gap-x-4 mb-[15px] ml-[550px] mt-[10px] text-[40px] feat15_2">
          {feature15[0].title.title2} <span className="caveat text-3xl  mb-[15px] feat15_3">{feature15[0].title.title3}</span>
        </p>
        <section className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-90">
          <Card title={feature15[0].cards.title.title1} percentage={feature15[0].cards.percentage.percentage1} />
          <Card title={feature15[0].cards.title.title2} percentage={feature15[0].cards.percentage.percentage2} />
          <Card title={feature15[0].cards.title.title3} percentage={feature15[0].cards.percentage.percentage3} />
          <Card title={feature15[0].cards.title.title4} percentage={feature15[0].cards.percentage.percentage4} />
          <Card title={feature15[0].cards.title.title5} percentage={feature15[0].cards.percentage.percentage5} />
          <Card title={feature15[0].cards.title.title6} percentage={feature15[0].cards.percentage.percentage6} />
        </section>
      </div>
    </main>
  );
};

export default Feature15;

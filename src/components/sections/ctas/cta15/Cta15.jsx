import React from "react";
import { useSelector } from "react-redux";
import { Education, Experience } from "../cta15/Data15_1";

const Cta15 = () => {
  const { cta15 } = useSelector((state) => state.template15);

  return (
    <main className="flex flex-col items-center container w-full  mt-[100px]" id="resume">
      <h1 className="sm:text-[44px] text-[26px] text-center m-0 cta15_1">{cta15[0].title.title1}</h1>
      <p className="font-bold text-sm  flex items-center text-center gap-x-4 cta15_2">
        {cta15[0].title.title2} <span className="caveat text-3xl cta15_3">{cta15[0].title.title3}</span>
      </p>
      <div className="w-full lg:flex gap-x-20">
        <section className="lg:w-1/2">
          <h1 className="ml-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_5">Education</h1>
          <Education />
        </section>
        <section className="lg:w-1/2 lg:mt-0 mt-8">
          <h1 className="mr-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_4 ">Experience</h1>
          <Experience />
        </section>
      </div>
    </main>
  );
};

export default Cta15;

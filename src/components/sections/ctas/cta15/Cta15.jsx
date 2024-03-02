import React from "react";
import { useSelector } from "react-redux";
import { Education, Experience } from "../cta15/Data15_1";

const Cta15 = () => {
  const { cta } = useSelector((state) => state.template15);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen" id="resume">
      <h1 className="sm:text-[44px] text-[26px] text-center m-0 cta15_1">{cta.title.title1}</h1>
      <p className="font-bold text-sm flex items-center justify-center gap-x-4 cta15_2">
        {cta.title.title2} <span className="caveat text-3xl cta15_3">{cta.title.title3}</span>
      </p>
      <div className="w-full lg:flex gap-x-20 justify-center">
        <section className="lg:w-1/2 max-w-[500px]">
          <h1 className="mr-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_5">Education</h1>
          <Education />
        </section>
        <section className="lg:w-1/2 max-w-[500px] mt-8 lg:mt-0">
          <h1 className="mr-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_4">Experience</h1>
          <Experience />
        </section>
      </div>
    </main>
  );
};

export default Cta15;

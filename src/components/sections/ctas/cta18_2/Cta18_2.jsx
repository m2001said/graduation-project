/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

const Cta18_2 = () => {

  const { cta18_2 } = useSelector((state) => state.template18);
  return (
    <>
      <span id="contact"></span>
      <div className="dark:bg-black dark:text-white py-14 ">
        <div className="container18">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{cta18_2.title}</h1>
              <p className="text-gray-400">{cta18_2.description} </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href={cta18_2.link}
                className="inline-block font-semibold py-2 px-6 bg-[--primary-color] text-white hover:bg-[--primary-color-80] duration-200 tracking-widest uppercase "
              >
                {cta18_2.linkTxt}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta18_2;

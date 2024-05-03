/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Cta18 = () => {
  // const { cta1 } = useSelector((state) => state.template18);
  const { pathname } = useLocation();
  const cta1 = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta1;
    } else {
      return state.template18.cta1;
    }
  });
  return (
    <div className="container18 bg-[--website-18-color-6] dark:bg-black">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={{
          backgroundImage: `url(${cta1.bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold font-serif">{cta1.title}</h1>
            <p className="text-center sm:px-20 text-sm">{cta1.description}</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="https://play.google.com">
                <img src={cta1.playStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
              <a href="https://www.apple.com/store">
                <img src={cta1.appStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta18;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";






const Cta18_1 = () => {

  const { cta18_1 } = useSelector((state) => state.template18);
  return (
    <div className="container18">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={{
          backgroundImage: `url(${cta18_1.bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our app</h1>
            <p className="text-center sm:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="https://play.google.com">
                <img src={cta18_1.PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
              <a href="https://www.apple.com/store">
                <img src={cta18_1.AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta18_1;

import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";

const Cta10 = () => {
  const { cta } = useSelector((state) => state.template10);

  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 textColor2 py-10"
        style={{
          backgroundImage: `url(${cta.bannerImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="items-center p-7 sm:p-30">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">{cta.title}</h1>
            <div className="flex flex-wrap justify-center items-center">
              <a href="https://www.apple.com/store">
                <img src={cta.AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
              <a href="https://play.google.com">
                <img src={cta.PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta10;

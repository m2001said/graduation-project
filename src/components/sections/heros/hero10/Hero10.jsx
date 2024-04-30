import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";
import { useLocation } from "react-router";

const Hero10 = ({ handleOrderPopup }) => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template10.hero;
    }
  });
  const [id, setId] = useState(0);
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-[--graybg] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={{
          backgroundImage: `url(${hero.images[0]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="items-center p-10 sm:p-30 pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* txt sec */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{hero.heros[id].title}</h1>
              <p className="text-sm mt-4">{hero.heros[id].description}</p>
              <div>
                <button onClick={handleOrderPopup} className="btnBg10 btnTxt10 px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 ">
                  {hero.buttonText}
                </button>
              </div>
            </div>
            {/* image sec */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main img */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img src={hero.heros[id].imgUrl} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
              </div>
              {/* other image list */}
              <div className="flex lg:flex-col  overflow-y-scroll lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-start gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {hero.heros.map((data, index) => (
                  <img
                    src={data.imgUrl}
                    alt=""
                    className="w-[80px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    onClick={() => {
                      setId(index);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero10;

import React, { useState } from "react";
import "../../../../assets/css/globals10.css";
import "./hero10.css";
import { useSelector } from "react-redux";

const Hero10 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero
  const [id, setId] = useState(0);
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-[--website-10-color-5] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={{
          backgroundImage: `url(${hero.imgs[0]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
        id={hero.sectionId}
      >
        <div className="items-center p-10 sm:p-30 pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* txt sec */}
            <div className="hero10-textContent flex flex-col justify-center gap-4 pt-12 sm:mt-12 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{hero.heros[id].title}</h1>
              <p className="text-sm mt-4">{hero.heros[id].description}</p>
              <div>
                <button className="btnBg10 btnTxt10 px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 ">{hero.buttonText}</button>
              </div>
            </div>
            {/* image sec */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main img */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img src={hero.heros[id].imgUrl} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
              </div>
              {/* other image list */}
              <div className="flex lg:flex-col  overflow-y-scroll lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-start gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full mb-12">
                {hero.heros.map((data, index) => (
                  <img
                    key={index}
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

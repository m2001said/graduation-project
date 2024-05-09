import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Hero13 = () => {
  const { pathname } = useLocation();
  const heroData = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template13.hero;
    }
  });

  // Extracting data from heroData
  const { title, subtitle, buttons, imgs, icon } = heroData;

  return (
    <div id="hero13" className="relative overflow-hidden bg-[var(--website-13-color-1)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--website-13-color-6)] absolute -bottom-7 -left-[30px] -right-[-30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between">
        <div className="text-[var(--website-13-color-3)] lg:w-1/2">
          <h1 className="lg:text-7xl text-2xl text-[var(--website-13-color-3)] leading-normal pb-8 primary-font font-medium">{title}</h1>
          <p className="text-[var(--website-13-color-3)]">{subtitle}</p>
          <div className="flex items-center gap-x-2 ">
            {buttons.map((button, index) => (
              <a key={index} href={button.url}>
                <button className="rounded-full px-3 py-2 flex items-center text-sm bg-[var(--website-13-color-4)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                  <p className="text-[var(--website-13-color-3)]">{button.title}</p>
                  <img src={icon} className="w-10 h-auto text-xl" alt="arrow" />
                </button>
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-[35%] w-72 relative lg:mx-0 mx-auto justify-end lg:py-0  py-8">
          <img src={imgs.main} alt="" className="lg:w-full" />
          <img src={imgs.secondary} alt="" className="sm:block hidden lg:w-40 w-1/4 absolute bottom-16 lg:-left-20 -left-10" />
          <p className="absolute top-10 right-0 rotate-90 text-[var(--website-13-color-3)] font-medium">{imgs.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero13;

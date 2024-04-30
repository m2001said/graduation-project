
import React from "react";
import styles from "../../heros/hero7/styles7/style";
import Services7 from "../../services/services7/Services7";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Hero7 = () => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template7.hero;
    }
  });
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ئ`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px]  ${styles.primary}`} style={{ backgroundColor: "var(--website-7-color-5)" }}>
          <img src={hero.imgUrl[0]} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>{hero.Subtitle}</p>
        </div>
        <h1
          className={`font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[90.8px] leading-[75px] pt-[50px] text-gradient7 ${styles.textGradient}`}
        >
          {hero.title}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <Services7 />
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-2)" }}>
          {hero.paragraf}
        </p>
      </div>
      <div className={`ss:hidden ${styles.flexCenter} md:flex`}>
        <Services7 />
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero.imgUrl[1]} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero7;

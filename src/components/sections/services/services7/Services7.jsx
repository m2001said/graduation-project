import React from "react";
import styles from "../../../../components/sections/heros/hero7/styles7/style";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Services7 = () => {
  const { pathname } = useLocation();
  const services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template7.services;
    }
  });
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  p-[2px] cursor-pointer`} style={{ backgroundColor: "var(--website-7-color-5)" }}>
      <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient7">{services.actionButton}</span>
          </p>
          <img src={services.imgUrl} alt="arrow-up" className="w-[23px] h-[23px] object-contain " />
        </div>
      </div>
    </div>
  );
};
export default Services7;

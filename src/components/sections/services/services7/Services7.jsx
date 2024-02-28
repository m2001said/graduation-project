import React from "react";
import styles from "../../../../components/sections/heros/hero7/styles7/style";
import { useSelector } from "react-redux";

const Services7 = () => {
  const { services } = useSelector((state) => state.template7);
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">{services.textA}</span>
          </p>
          <img src={services.imgUrl} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient ">{services.textB}</span>
        </p>
      </div>
    </div>
  );
};
export default Services7;

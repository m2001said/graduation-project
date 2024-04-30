import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Button7 = ({ styles }) => {
  const { pathname } = useLocation();
  const feature = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.features;
    } else {
      return state.template7.features;
    }
  });

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-aqua-100 rounded-[10px] text-white outline-none ${styles}`}
    >
      {feature.actionButton}
    </button>
  );
};
export default Button7;

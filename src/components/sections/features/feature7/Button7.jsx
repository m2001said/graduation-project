import React from "react";

const Button7 = ({ styles, buttonText }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-aqua-500 rounded-[10px] text-white outline-none ${styles}`}
    >
      {buttonText}
    </button>
  );
};
export default Button7;

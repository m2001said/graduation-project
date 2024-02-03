import React from "react";
import { btn7 } from "../../../../../features/templateData/templateSlice7";

const Button7 = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-aqua-500 rounded-[10px] text-white outline-none ${styles}`}>
    {btn7[0].text}
  </button>
);

export default Button7;

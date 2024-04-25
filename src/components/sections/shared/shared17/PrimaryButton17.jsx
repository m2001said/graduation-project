import React from "react";
import { useSelector } from "react-redux";
const PrimaryButton17 = () => {
    const button = useSelector((state) => state.template17.button);

  return (
    <>
      <div className="flex items-center group">
        <button className="bg-[var(--color17-primary)] h-[40px] text-[var(--color17-dark)] px-3 py-2">
          {" "}
{button.chooseMeal}        </button>
        <img src={button.arrowRight}
         className="inline-block group-hover:!translate-x-2 duration-200 P-2  text-base h-[40px] w-[40px]  bg-[var(--color17-primaryDark)] text-[var(--color17-white)] icon-17" />
      </div>
    </>
  );
};

export default PrimaryButton17;

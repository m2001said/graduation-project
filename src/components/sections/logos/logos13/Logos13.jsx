import React from "react";
import { useSelector } from "react-redux";

const Logos13 = () => {
  const logos = useSelector((state) => state.template13.logos);

  return (
    <div className="relative flex overflow-hidden bg-[var(--website-13-color-5)] lg:py-20 py-8 px-3 logos13">
      <section className="flex items-center flex-wrap w-full   justify-around gap-2 mt-24 mb-16 ">
        {logos &&
          logos.map((logo, index) => (
            <span className="flex items-center  flex-col gap-x-2" key={index}>
              <img src={logo.logo} alt={logo.title} className="  sm:w-3/12  lg:w-28  text-[var(--website-13-color-1)] text-3xl" />
              <p className="font-medium primary-font text-xl sm:text-sm text-[var(--website-13-color-1)]">{logo.title}</p>
            </span>
          ))}
      </section>
    </div>
  );
};

export default Logos13;

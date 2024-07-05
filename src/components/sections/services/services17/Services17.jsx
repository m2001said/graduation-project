import React, { useState } from "react";
import "./services17.css";

const Services17 = ({ template }) => {
  const services = template.services;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="py-16 md:py-28 bg-gradient-to-b from-[var(--website-17-color-4)] to-[var(--website-17-color-6)]  "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container17 py-16    rounded-3xl">
        <h1 className="pb-16 tracking-wider text-8xl ephesis font-semibold text-[var(--website-17-color-2)] text-center">{services.title}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
          {services.services.map((item, index) => (
            <div key={index} className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-[var(--website-17-color-2)] text-2xl p17">{item.description}</p>
              <p className="text-5xl rotate-90 text-[var(--website-17-color-2)] text-center translate-x-5">.....</p>
              <img
                src={item.icon}
                alt={`Service ${index + 1}`}
                className={`text-5xl text-[var(--website-17-color-4)] w-1/4 ${index === 0 && isHovered ? "walkToEnd" : ""} ${
                  index === 1 && isHovered ? "flaming" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services17;

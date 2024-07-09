import React from "react";
import { useSelector } from "react-redux";

const Feature13 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const { title, subtitle, description, features, sectionId } = template ? template.features : ownFooter;

  return (
    <div
      id={sectionId}
      className="relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-t from-[var(--website-13-color-5)] to-[var(--website-13-color-1)] lg:py-20 py-8 "
    >
      <p className="text-center text-[var(--website-13-color-4)] text-lg">{title}</p>
      <h1 className="text-center text-[var(--website-13-color-3)] lg:text-5xl text-xl primary-font mt-4">
        {subtitle} <br /> <span className="underline decoration-[var(--website-13-color-4)]">{description}</span>
      </h1>

      <div className="flex justify-center mt-8 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto     max-w-7xl">
          {features &&
            features.map((feature, index) => (
              <div
                key={index}
                className="group bg-[var(--website-13-color-5)] py-8 px-6 text-center h-auto rounded-3xl border  border-[var(--website-13-color-1)] overflow-hidden transform hover:scale-105 transition-all duration-300  "
              >
                <img
                  src={feature.icon}
                  className="w-12 h-12 mx-auto mb-4 group-hover:translate-x-14   rounded-full transition-all duration-300"
                  alt={feature.title}
                />
                <p className="text-lg text-[var(--website-13-color-2)] primary-font font-semibold mb-2  ">{feature.title}</p>
                <p className="text-[var(--website-13-color-1)] text-sm  ">{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feature13;

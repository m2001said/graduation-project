import React from "react";

const Feature13 = ({ template }) => {
  const { title, subtitle, description, features } = template.feature;

  return (
    <div id="feature13" className="relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-t from-[var(--website-13-color-5)] to-[var(--website-13-color-1)] lg:py-20 py-8 ">
      <p className="text-center text-[var(--website-13-color-4)] text-lg">{title}</p>
      <h1 className="text-center text-[var(--website-13-color-3)] lg:text-5xl text-xl primary-font mt-4">
        {subtitle} <br /> <span className="underline decoration-[var(--website-13-color-4)]">{description}</span>
      </h1>

      <div className="flex justify-center mt-8 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
          {features &&
            features.map((feature, index) => (
              <div
                key={index}
                className="group bg-[var(--website-13-color-6)] py-8 px-6 text-center rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:bg-[var(--website-13-color-1)] hover:border-[var(--website-13-color-4)] border-[var(--website-13-color-2)] border-opacity-50"
              >
                <img
                  src={feature.icon}
                  className="w-12 h-12 mx-auto mb-4 group-hover:bg-[var(--website-13-color-3)] rounded-full transition-all duration-300"
                  alt={feature.title}
                />
                <p className="text-lg text-[var(--website-13-color-2)] primary-font font-semibold mb-2 group-hover:text-[var(--website-13-color-3)]">{feature.title}</p>
                <p className="text-[var(--website-13-color-1)] group-hover:text-[var(--website-13-color-3)]">{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feature13;

import React from "react";

const Feature13 = ({ template }) => {
  const { title, subtitle, description, features } = template.feature;

  return (
    <div id="feature13" className="relative overflow-hidden bg-gradient-to-t from-[var(--website-13-color-5)] to-[var(--website-13-color-1)] lg:py-20 py-8">
      <p className="text-center text-[var(--website-13-color-4)]">{title}</p>
      <h1 className="text-center text-[var(--website-13-color-3)] lg:text-5xl text-xl primary-font">
        {subtitle} <br /> <span className="underline decoration-[var(--website-13-color-4)]">{description}</span>
      </h1>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8 max-w-7xl">
          {features &&
            features.map((feature, index) => (
              <span
                key={index}
                className="bg-[var(--website-13-color-6)] py-8 px-6 hover:bg-[var(--website-13-color-3)] hover:text-[var(--website-13-color-4)] text-center"
              >
                <img src={feature.icon} className="w-10 mx-auto text-5xl hover:bg-[var(--website-13-color-4)]" alt={feature.title} />
                <p className="text-xl text-[var(--website-13-color-2)] primary-font font-semibold py-8 pb-4">{feature.title}</p>
                <p className="text-[var(--website-13-color-1)]">{feature.description}</p>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feature13;

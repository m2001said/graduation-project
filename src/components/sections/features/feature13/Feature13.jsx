import React from "react";
import { useSelector } from "react-redux";

const Feature13 = () => {
  const feature = useSelector((state) => state.template13.feature); // Assuming 'feature' is correctly set in Redux state

  return (
    <div id="feature13" className="relative overflow-hidden bg-[var(--website-13-color-6)] lg:py-20 py-8">
      <p className="text-center text-[var(--website-13-color-4)]">{feature.title}</p>
      <h1 className="text-center text-[var(--website-13-color-2)] lg:text-5xl text-xl primary-font">
        {feature.subtitle} <br /> <span className="underline decoration-[var(--website-13-color-4)]">{feature.description}</span>
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
        {feature.icons &&
          feature.icons.map((icon) => (
            <span key={icon.id} className="bg-[var(--website-13-color-6)] py-8 px-6 hover:bg-[var(--website-13-color-3)] hover:text-[var(--website-13-color-4)]">
              <img src={icon.icon} className="w-10 text-5xl hover:bg-[var(--website-13-color-4)]" alt={icon.title} />
              <p className="text-xl text-[var(--website-13-color-2)] primary-font font-semibold py-8 pb-4">{icon.title}</p>{" "}
              <p className="text-[var(--website-13-color-1)]">{icon.description}</p>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Feature13;

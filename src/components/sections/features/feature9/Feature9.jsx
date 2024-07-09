import React from "react";
import { useSelector } from "react-redux";

const Feature9 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const features = template ? template.features : ownFooter;

  return (
    <main  id={features.sectionId} className="bg-gradient-to-t from-[var(--website-9-color-3)] to-[var(--website-9-color-1)] py-12 px-4">
      <div className="text-center pb-12">
        <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-full h-12 w-12 mx-auto mb-4"></button>
        <p className="text-[var(--website-9-color-3)] uppercase md:text-xl text-lg">{features.title}</p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12">{features.subtitle}</h1>
      </div>
      <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
        {features.features.map((items, index) => (
          <div key={index} className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={items.imgUrl} alt="" className="object-cover md:h-80 h-40 w-full" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <p className="text-[var(--website-9-color-1)] md:text-5xl text-xl font-semibold pb-2 md:pb-3">{items.number}</p>
              <p className="text-[var(--website-9-color-1)] lg:text-xl md:text-base text-sm">
                {items.subtitle}, {items.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Feature9;

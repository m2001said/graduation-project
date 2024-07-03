import React from "react";
import "./feature17.css"
const Feature17 = ({ template }) => {
  const { title, subtitle, description, imgs } = template.features;

  return (
    <>
      <div className="container17 py-14   relative">
        <div className="relative">
          <h1 className="py-8 tracking-wider text-4xl text-[var(--website-17-color-3)] ephesis text-center">
            {title}
          </h1>

          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p className="text-[var(--website-17-color-4)] p17">
                  <span className="text-[var(--website-17-color-1)]">{subtitle}</span>
                </p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div>
                <p className="text-[var(--website-17-color-2)] p17">{description}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 sm:mt-14"></div>
        </div>

        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 float-animation">
          <img src={imgs[3]} alt="" className="max-w-[160px]" />
        </div>

        <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 bounce-animation">
          <img src={imgs[4]} alt="" className="max-w-[280px]" />
        </div>

        <div className="hidden sm:block absolute top-10 right-0 transform -translate-y-1/2 opacity-50 sm:opacity-100 float-animation">
          <img src={imgs[2]} alt="" className="max-w-[200px]" />
        </div>

        <div className="hidden sm:block absolute bottom-0 right-0 float-animation">
          <img src={imgs[0]} alt="" className="max-w-[200px]" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100 bounce-animation">
          <img src={imgs[1]} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Feature17;

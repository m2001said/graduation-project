import React from "react";
import "../../../../assets/css/globals10.css";
import { useSelector } from "react-redux";


const Feature10 = ({ template }) => {
  const ownFooter = useSelector((state) => state.ownTemplate.features);
  const feature = template ? template.features : ownFooter;

  return (
    <>
      <div className="py-10 bg-[--website-10-color-2] dark:bg-gray-900 dark:text-white" id={feature.sectionId}>
        <div className="items-center py-6 px-10 sm:p-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            {/* image sec */}
            <div>
              <img src={feature.imgUrl} alt="" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
            </div>
            {/* txt sec */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold textColor10">{feature.title}</h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">{feature.description} </p>
              <div className="flex flex-col gap-4">
                {feature.features.map((data, index) => (
                  <div className="flex items-center gap-4" key={index}>
                    <div className={`feature10-divIcon`}>
                      <img src={data.icon} alt="" className="w-full rounded-full" />
                    </div>
                    <p className="text-base font-sans textColor10">{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature10;

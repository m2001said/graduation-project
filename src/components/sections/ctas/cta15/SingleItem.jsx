import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SingleItem = ({ title, description, subtitle, year, template }) => {
  const cta = template.cta;
  const [expanded, setExpanded] = useState(false);
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <article className="h-full flex-wrap basis-0 flex mb-2 border-0 border-b-2 border-solid border-black relative">
      <div className={`accordion-border w-full ${language === "ar" ? "ml-6" : "mr-6"}`}>
        <p className="flex justify-between relative items-center m-auto w-full pl-6">
          <span className="items-center text-2xl font-bold py-3 cta_6">{title}</span>
        </p>
        {expanded && (
          <div className="pr-5 pl-3">
            <span className="flex items-center justify-between">
              <p className="text-lg font-bold m-0 cta_7">{subtitle}</p>
              <span className="flex items-center gap-x-1">
                <p className="text-sm font-bold m-0 cta_8">{year}</p>
              </span>
            </span>
            <p className=" relative pt-2 pb-5 leading-8 cta_9">{description}</p>
          </div>
        )}
        <span
          className={`absolute z-10 -bottom-6 rounded-full border-2 border-black shadowbtn ${language === "ar" ? "left-0" : "right-0"}`}
          onClick={() => setExpanded(!expanded)}
        >
          <button className={`${expanded ? "bg-[#f0ebe3]" : "bg-white"} flex items-center justify-center text-2xl font-bold h-12 w-12 rounded-full`}>
            {expanded ? <img src={cta.imgs[1]} alt="expand" /> : <img src={cta.imgs[0]} alt="collapse" />}
          </button>
        </span>
      </div>
    </article>
  );
};

export default SingleItem;

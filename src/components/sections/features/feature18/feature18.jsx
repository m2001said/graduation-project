// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";


const Features = () => {
  const { feature18 } = useSelector((state) => state.template18);

  return (
    <div className="dark:bg-[--dark18] bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container18">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img src={feature18.imgUrl} alt="" className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">{feature18.title}</h1>
              <p className="leading-8 tracking-wide">{feature18.description1}</p>
              <p>{feature18.description2}</p>
              <button className="button-outline">{feature18.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

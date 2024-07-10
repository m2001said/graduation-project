import React from "react";
import "./items14.css";

const Items14 = ({ template }) => {
  const items = template.items;

  return (
    <div className="py-10 bg-[--website-14-color-6] dark:bg-gray-900" id={items.sectionId}>
      <div className="container14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.items.map((item, index) => (
            <div key={index} className={`item14-allCard item14-card${index} py-10 pl-5 text-white rounded-3xl relative h-[320px] flex items-end `}>
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-200">{items.title}</p>
                  <p className="text-2xl font-semibold mb-[2px]">{items.subtitle}</p>
                  <p className="mb-[2px] text-gray-200">{item.firstTitle}</p>
                  <p className="text-2xl font-semibold mb-[2px]">{item.secondTitle}</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{item.title}</p>
                  <button className={`item14-button${index} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                    {items.buttonText}
                  </button>
                </div>
              </div>
              <div>
                <img src={item.imgUrl} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items14;

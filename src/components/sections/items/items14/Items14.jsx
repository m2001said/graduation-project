import React from "react";
import "./items14.css";
import { useSelector } from "react-redux";



const Items14 = () => {

  const { items } = useSelector((state) => state.template14);

  return (
    <div className="py-10 bg-white dark:bg-gray-900">
      <div className="container14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.items.map((item, index) => (
            <div className={`item14-card${index} py-10 pl-5 text-white rounded-3xl relative h-[320px] flex items-end `}>
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-200">{items.firstTitle}</p>
                  <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{item.title}</p>
                  <button className={`item14-button${index} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                    {items.buttonText}
                  </button>
                </div>
              </div>
              <img src={item.imgUrl} alt="" />
            </div>
          ))}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          first col
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{items.title1}</p>
                <button className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          second col
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-yellow] to-[--brand14-yellow] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items.title2}</p>
                <button className={`bg-white text-[--brand14-yellow] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>
          third col
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[--primary14-color] to-[--primary14-color] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items.title3}</p>
                <button className={`bg-white text-[--primary14-color] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image3} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
        </div>
        second row
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          First col
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[--brand14-gray] to-[--brand14-gray] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items.title3}</p>
                <button className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image4} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
          Second col
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-green] to-[--brand14-green] text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{items.title2}</p>
                <button className={`bg-white text-[--brand14-green] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image5} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          Third col
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-blue] to-[--brand14-blue] text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items.title1}</p>
                <button className={`bg-white text-[--brand14-blue] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items.buttonText}
                </button>
              </div>
            </div>
            <img src={items.image6} alt="" className="w-[200px] absolute bottom-0 right-0" />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Items14;

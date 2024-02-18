// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";



const Items14 = () => {

  const { items14 } = useSelector((state) => state.template14);

  return (
    <div className="py-10">
      <div className="container14 grid grid-rows-2 gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{items14.title1}</p>
                <button className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-yellow] to-[--brand14-2-yellow] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items14.title2}</p>
                <button className={`bg-white text-[--brand14-yellow] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[--primary14-color] to-[--primary14-2-color] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items14.title3}</p>
                <button className={`bg-white text-[--primary14-color] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image3} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[--brand14-gray] to-[--brand14-2-gray] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items14.title3}</p>
                <button className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image4} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-green] to-[--brand14-green] text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{items14.title2}</p>
                <button className={`bg-white text-[--brand14-green] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image5} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[--brand14-blue] to-[--brand14-2-blue] text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{items14.firstTitle}</p>
                <p className="text-2xl font-semibold mb-[2px]">{items14.secondTitle}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{items14.title1}</p>
                <button className={`bg-white text-[--brand14-blue] cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
                  {items14.buttonText}
                </button>
              </div>
            </div>
            <img src={items14.image6} alt="" className="w-[200px] absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items14;

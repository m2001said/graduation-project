// eslint-disable-next-line no-unused-vars
import React from "react";
import Image1 from "../../../../assets/images/img10/category/earphone.png";
import Image2 from "../../../../assets/images/img10/category/watch.png";
import Image3 from "../../../../assets/images/img10/category/macbook.png";
import Image4 from "../../../../assets/images/img10/category/gaming.png";
import Image5 from "../../../../assets/images/img10/category/vr.png";
import Image6 from "../../../../assets/images/img10/category/speaker.png";


const Items14 = () => {
  return (
    <div className="py-10">
      <div className="container grid grid-rows-2 gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                <button className={`bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <button className={`bg-white text-brandYellow cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <button className={`bg-white text-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image3} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <button className={`bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image4} alt="" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                <button className={`bg-white text-brandGreen cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image5} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <button className={`bg-white text-brandBlue cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>Browse</button>
              </div>
            </div>
            <img src={Image6} alt="" className="w-[200px] absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items14;

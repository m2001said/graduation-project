import React from "react";
import "../../../../assets/css/globals10.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Testimonials10 = ({template}) => {
    const testimonial = template.testimonials;

  return (
    <div className="pb-4 bg-[--white10] dark:bg-gray-900 dark:text-white">
      <div className="items-center p-10 sm:p-20">
        {/* header sec*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="smHeader10 text-sm bg-clip-text text-transparent">{testimonial.subtitle}</p>
          <h1 className="text-3xl font-bold">{testimonial.title}</h1>
          <p className="text-xs text-gray-400">{testimonial.description}</p>
        </div>
        {/* card sec */}
        <div className="">
          <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
            {testimonial.testimonials.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="mb-5">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 testimonailBg10 relative">
                    <div>
                      <img className="rounded-full w-20 h-20 object-cover" src={data.imgUrl} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-gray-500 text-sm">{data.description}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-white">{data.title}</h1>
                      </div>
                    </div>
                    <p className="text-black/30 text-9xl font-serif absolute top-0 right-0">,,</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials10;

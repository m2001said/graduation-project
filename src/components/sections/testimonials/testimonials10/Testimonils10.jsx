import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "../../../../assets/css/globals10.css";

const Testimonials10 = () => {
  const { testimonial10 } = useSelector((state) => state.template10);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-4">
      <div className="items-center p-10 sm:p-20">
        {/* header sec*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="smHeader text-sm bg-clip-text text-transparent">{testimonial10.smTitle}</p>
          <h1 className="text-3xl font-bold">{testimonial10.title}</h1>
          <p className="text-xs text-gray-400">{testimonial10.description}</p>
        </div>
        {/* card sec */}
        <div>
          <Slider {...settings}>
            {testimonial10.cards.map((data) => (
              <div className="mb-5">
                <div key={data.id} className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 testimonailBg relative">
                  <div>
                    <img className="rounded-full w-20 h-20 object-cover" src={data.img} alt="" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/30 text-9xl font-serif absolute top-0 right-0">{testimonial10.mark}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials10;

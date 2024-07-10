import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const Testimonials13 = ({ template }) => {
  const ownTestimonials = useSelector((state) => state.ownTemplate.testimonials);
  const testimonials = template ? template.testimonials : ownTestimonials;
  const Card = ({ testimonial }) => {
    const { name, location, imgUrl, opinion, sectionId } = testimonial;
    return (
      <div id={sectionId} className="bg-[var(--website-13-color-5)]  text-[var(--website-13-color-1)]  p-6 rounded-lg shadow-lg transition-all duration-300">
        <img
          src={imgUrl}
          alt={name}
          className="rounded-full border-4 border-[var(--website-13-color-2)] hover:border-[var(--website-13-color-4)] mx-auto mb-4 w-24 h-24"
        />
        <p className="text-center font-bold text-lg">{name}</p>
        <p className="text-center text-[var(--website-13-color-6)]">{location}</p>
        <hr className="my-4 border-[var(--website-13-color-2)]" />
        <p className="text-center text-sm transition-colors duration-300 h-auto overflow-hidden  ">{opinion}</p>
      </div>
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = windowWidth > 768 ? 3 : 1;

  return (
    <div className="px-6 py-8 bg-gradient-to-t from-[var(--website-13-color-2)] to-[var(--website-13-color-5)] text-center">
      <p className="text-[var(--website-13-color-4)]">{testimonials.title}</p>
      <h1 className="text-[var(--website-13-color-2)] text-3xl font-semibold mb-8">
        {testimonials.subtitle}
        <span className="block text-[var(--website-13-color-4)]">{testimonials.description}</span>
      </h1>
      {/* Register Autoplay, Navigation, and Pagination modules */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 3000 }}
        navigation={{ disableOnInteraction: true }} // Fix button interference
        pagination={{ clickable: true }}
      >
        {testimonials.testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials13;

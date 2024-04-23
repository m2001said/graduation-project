/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Testimonials13 = () => {
  const testimonials = useSelector((state) => state.template13.testimonials);

  const Card = ({ testimonial }) => {
    const { person, name, title, description } = testimonial;
    return (
      <div className="bg-[var(--green-13)] w-80 relative flex justify-center z-20 p-8 mt-40">
        <button className="rounded-full bg-[var(--green-13)] absolute -top-20 h-32 w-64 rounded-b-none btn13"></button>
        <div className="relative z-20 text-center">
          <img src={person} alt={name} className="w-20 h-20 rounded-full -mt-8 mx-auto img-13" />
          <p className="text-xl text-[var(--white-13)] primary-font font-semibold pt-4 pb-2">{name}</p>
          <p className="font-light pb-4">{title}</p>
          <hr />
          <p className="pt-4 text-[var(--white-13)]">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-[var(--color-g-13-g)] lg:py-24 py-8">
      <div className="h-[50px] bg-[var(--c616161)] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] text-[var(--white-13)] mx-auto px-3">
        <p>Testimonials</p>
        <div className="relative lg:pb-0 pb-8"></div>
        <h1 className="lg:text-4xl primary-font text-[var(--white-13)] text-xl">
          {testimonials.heading1} <span className="underline decoration-[var(--color-13-yel)]">{testimonials.heading2}</span> {testimonials.heading3}
        </h1>
        <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }} navigation pagination={{ clickable: true }} className="z-30 w-full swiper13">
          {testimonials.testimonial.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/**small devices cards */}
        <div className="z-30 w-full justify-center flex flex-col items-center lg:hidden md:hidden swiper13-s">
          {testimonials.testimonial.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials13;

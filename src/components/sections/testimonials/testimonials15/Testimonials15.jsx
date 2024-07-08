import React from "react";
import { useSelector } from "react-redux";

const Testimonials15 = ({ template }) => {
  const ownTestimonials = useSelector((state) => state.ownTemplate.testimonials);
  const testimonial = template ? template.testimonials : ownTestimonials;
  const Card = ({ name, subtitle, imgUrl, description }) => {
    return (
      <div className="hoverBtn">
        <div className="test15_4 rounded-[20px] py-[30px] relative overflow-hidden">
          <div className="relative">
            <img src={imgUrl} alt="" className="rounded-[18px] h-[180px] w-full object-cover" />
          </div>
          <p className="test15_5 opacity-80 my-[30px] leading-[1.7rem] text-[15px] pl-[5px]">{description}</p>
          <span className="m-0">
            <p className="text-[21px] font-bold text-center test15_6 ">{name}</p>
            <p className="text-[#262626] font-bold text-center test15_7">{subtitle}</p>
          </span>
          <div className="absolute -right-6 -bottom-6  bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-5 pt-16 px-3 test15" id={testimonial.sectionId}>
      <div className="container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0 test15_1">{testimonial.title}</h1>
        <p className="font-bold text-sm text-[#29a37] flex items-center text-center justify-center gap-x-4 text-4xl test15_2">{testimonial.subtitle}</p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          {testimonial.testimonials.map((card, index) => (
            <Card key={index} name={card.name} subtitle={card.subtitle} imgUrl={card.imgUrl} description={card.description} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Testimonials15;

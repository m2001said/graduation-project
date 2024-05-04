import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Testimonials9 = () => {
  const { pathname } = useLocation();
  const testimonialsData = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.testimonials;
    } else {
      return state.template9.testimonials;
    }
  });

  const testimonials = useSelector((state) => state.template9.testimonials.testimonial);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  if (!testimonialsData || testimonialsData.length === 0 || !currentTestimonial) {
    return <div>Loading testimonials...</div>; // Handle loading state or error gracefully
  }

  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20 pb-20 testimonial-9">
      
      <div className="lg:w-1/3 flex flex-col">
        <p className="text-[var(--website-9-color-3)] uppercase md:text-xl text-lg">
          {testimonialsData.title}
        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize py-3">
          {testimonialsData.subtitle}
        </h1>
        <p className="text-[var(--website-9-color-3)] text-sm">{testimonialsData.text}</p>
        <div className="lg:flex hidden gap-x-12 mt-16">
          <button
            onClick={handlePrevTestimonial}
            className="w-12 h-12 rounded-full border border-[var(--website-9-color-2)] flex justify-center items-center text-2xl text-[var(--website-9-color-2)] focus:text-[var(--website-9-color-1)] hover:text-[var(--website-9-color-1)]"
          >
            <img src={testimonialsData.previous} alt="Previous" />
          </button>
          <button
            onClick={handleNextTestimonial}
            className="w-12 h-12 rounded-full border border-[var(--website-9-color-2)] flex justify-center items-center text-2xl text-[var(--website-9-color-2)] focus:text-[var(--website-9-color-1)] hover:text-[var(--website-9-color-1)]"
          >
            <img src={testimonialsData.next} alt="Next" />
          </button>
        </div>
      </div>

      <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
        <img src={testimonialsData.quotation} alt="quote" className="text-[#ffe999] text-3xl logo-9" />
        <p className="font-medium pt-2 text-[var(--website-9-color-3)] pb-8">
          {currentTestimonial.quote}
        </p>
        <div className="border-t border-[var(--grey-9)] flex items-center py-4">
          <img
            src={currentTestimonial.imgUrl}
            alt={currentTestimonial.author}
            className="rounded-full h-12 w-12 object-cover"
          />
          <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p className="text-[var(--website-9-color-3)]">{currentTestimonial.author}</p>
            <div className="flex flex-row">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={testimonialsData.star}
                  alt="star"
                  className="w-6 h-6 mr-1"
                />
              ))}
            </div>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Testimonials9;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Testimonials9 = ({ template }) => {
  const { t, i18n } = useTranslation();
  const testimonialsData = template.testimonials;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [rating, setRating] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const currentTestimonial = testimonialsData.testimonials[currentTestimonialIndex];

  if (!testimonialsData || testimonialsData.testimonials.length === 0 || !currentTestimonial) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <main className=" mx-auto px-4 py-12 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 bg-gradient-to-r from-[var(--website-9-color-1)] to-[var(--website-9-color-3)] testimonial-9">
      <div className="container lg:w-1/3 flex flex-col items-start space-y-4">
        <p className="text-[var(--website-9-color-4)] uppercase text-lg lg:text-xl">
          {testimonialsData.title}
        </p>
        <h1 className="text-2xl lg:text-4xl text-[var(--website-9-color-4)] font-medium capitalize">
          {testimonialsData.subtitle}
        </h1>
        <p className="text-[var(--website-9-color-4)] text-sm">{testimonialsData.description}</p>
        <div className="flex gap-x-4 mt-6">
          <button
            onClick={handlePrevTestimonial}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[var(--website-9-color-3)] flex justify-center items-center"
          >
            <img
              src={i18n.language === "ar" ? testimonialsData.icons[0] : testimonialsData.icons[1]}
              alt="Previous"
            />
          </button>
          <button
            onClick={handleNextTestimonial}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[var(--website-9-color-3)] flex justify-center items-center"
          >
            <img
              src={i18n.language === "ar" ? testimonialsData.icons[1] : testimonialsData.icons[0]}
              alt="Next"
            />
          </button>
        </div>
      </div>

      <div className="relative  rounded-2xl shadow-2xl w-full lg:w-2/5 p-6 lg:p-16">
        <img src={testimonialsData.icons[2]} alt="quote" className="text-[var(--website-9-color-4)] text-3xl logo-9" />
        <p className="font-medium pt-2 text-[var(--website-9-color-4)] text-2xl pb-8">
          {currentTestimonial.opinion}
        </p>
        <div className="border-t border-[var(--website-9-color-1)] flex items-center py-4">
          <img
            src={currentTestimonial.imgUrl}
            alt={currentTestimonial.name}
            className="rounded-full h-12 w-12 object-cover"
          />
          <span className="flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p className="text-[var(--website-9-color-4)]">{currentTestimonial.name}</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={testimonialsData.icons[3]}
                  alt="star"
                  className={`w-6 h-6 mr-1 cursor-pointer ${
                    index < rating ? 'text-[var(--website-9-color-1)]' : 'text-[var(--website-9-color-5)]'
                  }`}
                  onClick={() => handleRating(index)}
                />
              ))}
            </div>
          </span>
        </div>
        <button className="bg-gradient-to-r from-[var(--website-9-color-5)] to-[var(--website-9-color-3)] rounded-full h-16 w-16 cursor-auto absolute -top-6 left-6"></button>
      </div>
    </main>
  );
};

export default Testimonials9;

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import './hero9.css'; // Import your CSS file for styles

const Hero9 = ({ template }) => {
  const hero = template.hero;
  const reviews = template.reviews;

  const handleHover = (event) => {
    const starsContainer = event.currentTarget;
    const rect = starsContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Create stars dynamically at the mouse position
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${mouseX}px`;
    star.style.top = `${mouseY}px`;
    starsContainer.appendChild(star);

    // Clean up after animation completes
    setTimeout(() => {
      star.remove();
    }, 1000); // Adjust timing to match your animation duration 
  };

  return (
    <main className="trialdesign9 mb-12 pt-4">
      <div className="bg-gradient-to-t from-[var(--website-9-color-3)] to-[var(--website-9-color-1)]  hero9">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen relative">
          <div className="lg:w-2/5">
            <p className="text-[var(--website-9-color-3)] md:text-xl text-lg font-medium">{hero.title}</p>
            <h1 className="lg:text-3xl text-3xl font-medium pt-3 pb-8 realestateh">{hero.subtitle}</h1>
            <p className="text-[var(--website-9-color-4)] lg:text-base text-sm pb-8 realestateh">{hero.description}</p>
            <div className="w-full lg:w-2/3 relative" onMouseMove={handleHover}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                direction="horizontal"
                className=" w-full"
              >
                {hero.imgs.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt="CarouselImage" className="rounded-2xl w-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <form className="shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-6 lg:ml-12">
            <div className="bg-[var(--website-9-color-3)] shadow-2xl rounded-3xl py-8">
              <div className="flex justify-between border-b border-[var(--text-9-color)] h-12 px-3"></div>
              <div className="py-8 flex flex-col gap-6 px-4">
                <input
                  type="text"
                  placeholder={hero.inputPlaceholder}
                  className="h-16 outline-none rounded-3xl bg-[var(--website-9-color-1)] text-[var(--website-9-color-3)] border border-[var(--website-9-color-1)] px-6"
                />
                <select
                  placeholder={hero.inputPlaceholder}
                  className="h-16 outline-none rounded-3xl text-[var(--website-9-color-3)] bg-[var(--website-9-color-1)] border border-[var(--website-9-color-1)] px-6"
                >
                  {hero.heros && hero.heros.map((option, index) => (
                    <option key={index}>{option.title}</option>
                  ))}
                </select>
              </div>
              <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:container mx-auto px-3 py-8">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-full h-24 w-24 cursor-auto">
            {" "}
          </button>
          <p className="text-[var(--website-9-color-4)]">{reviews.subtitle}</p>
        </span>
        <div className="py-12">
          <Swiper modules={[Navigation, Autoplay]} slidesPerView={2} spaceBetween={2} speed={5000} autoplay={{ delay: 100 }} direction="horizontal">
            {reviews.logos &&
              reviews.logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img src={logo} alt="Company Logo" className="mr-4 h-8" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="lg:flex justify-center lg:mt-12 gap-x-8 lg:px-0 px-3">
        <div className="bg-[var(--website-9-color-3)] rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl">
          <span className="flex items-center relative h-10 w-44">
            {reviews.reviews &&
              Array.isArray(reviews.reviews) &&
              reviews.reviews.map((review, index) => (
                <div key={index} className="lg:mr-7 mr-5 h-full">
                  <img
                    src={review}
                    alt="Customer Image"
                    className="w-10 h-10 rounded-full object-cover absolute bg-[var(--website-9-color-1)] border border-[var(--website-9-color-1)]"
                  />
                </div>
              ))}
            {reviews.icon && (
              <button className="w-8 h-8 rounded-full text-[var(--website-9-color-1)] relative flex items-center justify-center">
                <img src={reviews.icon} alt="Plus Icon" className="logo-9" />
              </button>
            )}
          </span>
          <p className="w-36 md:text-xl font-medium">{reviews.title}</p>
        </div>
        <div className="bg-[var(--website-9-color-6)] rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl">
          <span className="flex items-center relative h-10 w-44">
            {reviews.icon && (
              <button className="w-8 h-8 rounded-full text-[var(--website-9-color-1)] relative flex items-center justify-center">
                <img src={reviews.icon} alt="Plus Icon" />
              </button>
            )}
          </span>
          <p className="w-36 md:text-xl font-medium">{reviews.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Hero9;

/* eslint-disable import/first */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'; // Import core Swiper library
import { useSelector } from 'react-redux';
// Import required modules from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Register modules with SwiperCore
SwiperCore.use([Navigation, Pagination, Autoplay]);

import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials13 = () => {
  const testimonials = useSelector((state) => state.template13.testimonials);

  const Card = ({ testimonial }) => {
    const { title, subtitle, imgUrl, description } = testimonial;
    return (
      <div className="testimonial-card justify-center px-5 py-8">
        <div className="testimonial-content justify-between items-center px-2 hover:bg-[var(--website-13-color-5)] hover:text-[var(--website-13-color-1)]">
          <img src={imgUrl} alt={title} className="testimonial-avatar rounded-full border-4 border-[var(--website-13-color-2)] hover:border-[var(--website-13-color-4)]" />
          <p className="testimonial-name">{title}</p>
          <p className="testimonial-title">{subtitle}</p>
          <hr />
          <p className="testimonial-description">{description}</p>
        </div>
      </div>
    );
  };

  // Use a state variable to track window width
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine slidesPerView based on window width
  const slidesPerView = windowWidth > 768 ? 3 : 1; // Adjust breakpoint as needed

  return (
    <div className="testimonial-container13 hover:bg-[var(--website-13-color-2)] px-6 items-center justify-around ">
      <p>{testimonials.title}</p>
      <h1 className="testimonial-heading">
        {testimonials.title}{" "}
        <span className="testimonial-highlight">{testimonials.subtitle}</span>{" "}
        {testimonials.description}
      </h1>
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={slidesPerView} // Dynamically set based on window width
        autoplay={{ delay: 3000 }} // Enable autoplay with 3-second delay
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
      >
        {testimonials.testimonial.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card testimonial={testimonial}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials13;

import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";


const Testimonial = () => {
  const { pathname } = useLocation();
  const testimonial = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.testimonials;
    } else {
      return state.template18.testimonials;
    }
  });
  return (
    <>
      <span id="about"></span>
      <div className="bg-white dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container18">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p className="text-3xl font-semibold text-center sm:text-4xl font-serif">{testimonial.title}</p>
            <p className="text-center sm:px-44">{testimonial.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonial.testimonials.map((data) => (
              <div
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img src={data.imgUrl} alt="" className="rounded-full w-20 h-20" />
                </div>
                <div className="text-2xl">{data.star}</div>
                <p>{data.description}</p>
                <p className="text-center font-semibold">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

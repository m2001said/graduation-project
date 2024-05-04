import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLocation } from "react-router";

const Pricing9 = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3.2 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2.2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1.2 }, // Adjusted for small devices
  };

  // Assuming useSelector hook is correctly configured
  const { pathname } = useLocation();
  const projects = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.projects;
    } else {
      return state.template9.projects;
    }
  });

  const cards = projects ? projects.cards : [];

  return (
    <main className="container  mx-auto pt-8 px-3 hover:bg-[var(--website-9-color-3)]  projects-9">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className={`text-[var(--website-9-color-3)] lg:text-xl uppercase`}>{projects.title}</h1>
          <h1 className={`lg:text-4xl text-2xl font-medium capitalize py-3`}>{projects.description}</h1>
          <p className={`text-[var(--website-9-color-3)] lg:text:base text-sm lg:w-3/5`}>{projects.subtitle}</p>
        </div>

        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          {/* {projects.categories.map((category, index) =>  */}
          {projects.category.map((category, index) => (
            <button
              key={index}
              className={`text-[var(--website-9-color-2)] rounded-full border border-[var(--website-9-color-2)] hover:text-[var(--website-9-color-1)] focus:bg-[var(--website-9-color-2)] focus:text-[var(--website-9-color-1)]`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-8">
        {/* Swiper for desktop and larger devices */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="hidden lg:block z-30 w-full "
          slidesPerView={3}
          loop={false}
          keyboard={true}
          spaceBetween={5}
          speed={700}
          breakpoints={responsive}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Image with error handling */}
                <img
                  src={card.imgUrl}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "/path/to/fallback-image.jpg"; // Fallback image URL
                  }}
                  alt=""
                  className="rounded-3xl w-full h-80 object-cover "
                />
                {/* Button with feature icon */}
                <button
                  className={`px-5 py-2 flex gap-x-2 items-center ${card.buttonColor}-button ${card.buttonBgColor}-background rounded-full absolute bottom-10 left-10`}
                >
                  <img src={card.features[0].icon} className="w-6 h-6" alt={card.features[0].text} />
                  {card.features[0].text}
                </button>
              </div>
              {/* Card details */}
              <div className="py-4">
                <p className="text-sm">{card.Address}</p>
                <div className="flex items-center gap-x-4 text-sm">
                  {card.features.slice(1).map((feature, index) => (
                    <span key={index} className="flex items-center gap-x-2">
                      <img src={feature.icon} alt={feature.text} className="w-6 h-6" />
                      {feature.text}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper for small devices */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="block lg:hidden z-30 w-full "
          slidesPerView={1}
          loop={false}
          keyboard={true}
          spaceBetween={5}
          speed={700}
          breakpoints={responsive}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Image with error handling */}
                <img
                  src={card.imgUrl}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/fallback-image.jpg";
                  }}
                  alt=""
                  className="rounded-3xl w-full h-80 object-cover "
                />
                {/* Button with feature icon */}
                <button
                  className={`px-5 py-2 flex gap-x-2 items-center ${card.buttonColor}-button ${card.buttonBgColor}-background rounded-full absolute bottom-10 left-10`}
                >
                  <img src={card.features[0].icon} className="w-6 h-6" alt={card.features[0].text} />
                  {card.features[0].text}
                </button>
              </div>
              {/* Card- details */}
              <div className="py-4">
                <p className="text-sm">{card.Address}</p>
                <div className="flex items-center gap-x-4 text-sm">
                  {card.features.slice(1).map((feature, index) => (
                    <span key={index} className="flex items-center gap-x-2">
                      <img src={feature.icon} alt={feature.text} className="w-6 h-6" />
                      {feature.text}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Pricing9;

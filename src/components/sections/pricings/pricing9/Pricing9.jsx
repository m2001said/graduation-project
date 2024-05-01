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
  const pricing = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.pricing;
    } else {
      return state.template9.pricing;
    }
  });

  const cards = pricing ? pricing.cards : [];

  return (
    <main className="container mx-auto pt-8 px-3 pricing-9">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className={`text-[var(--primary-text-color-9)] lg:text-xl uppercase`}>checkout our new </h1>
          <h1 className={`lg:text-4xl text-2xl font-medium capitalize py-3`}>Latest Listed Properties</h1>
          <p className={`text-[var(--primary-text-color-9)] lg:text:base text-sm lg:w-3/5`}>asda asd dadc dad</p>
        </div>

        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--white-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--white-9)]`}
          >
            ALL
          </button>
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--white-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--white-9)]`}
          >
            SELL
          </button>
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--white-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--white-9)]`}
          >
            RENT
          </button>
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

import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Pricing9 = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3.2 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2.2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1.7 },
  };

  // Assuming useSelector hook is correctly configured
  const { pricing } = useSelector((state) => state.template9);
  const cards = pricing ? pricing.cards : [];

  return (
    <main className="container mx-auto  pricing-9">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className={`text-[var(--primary-text-color-9)] lg:text-xl uppercase`}>checkout our new </h1>
          <h1 className={`lg:text-4xl text-2xl font-medium capitalize py-3`}>Latest Listed Properties</h1>
          <p className={`text-[var(--secondary-text-color-9)] lg:text:base text-sm lg:w-3/5`}>asda asd dadc dad</p>
        </div>

        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--icon-bg-color-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--icon-bg-color-9)]`}
          >
            ALL
          </button>
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--icon-bg-color-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--icon-bg-color-9)]`}
          >
            SELL
          </button>
          <button
            className={`text-[var(--button-text-color-9)] rounded-full border border-[var(--button-text-color-9)] hover:text-[var(--icon-bg-color-9)] focus:bg-[var(--button-text-color-9)] focus:text-[var(--icon-bg-color-9)]`}
          >
            RENT
          </button>
        </div>
      </div>

      <section className="mt-8">
        <Carousel
          className="z-30 w-full lg:flex  justify-center carousel-9"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={true}
          keyBoardControl={true}
          customTransition="all.5"
          transitionDuration={700}
        >
          {cards.map((card, index) => (
            <div key={index}>
              <div className="relative h-80 sm:w-80">
                {/* Image with error handling */}
                <img
                  src={card.imgUrl}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = "/path/to/fallback-image.jpg"; // Fallback image URL
                  }}
                  alt=""
                  className="rounded-3xl h-full w-full object-cover"
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
              <span className="flex flex-col gap-y-1 py-4">
                <p className="text-2xl font-medium">{card.price}</p>
                <p className="text-lg font-medium">{card.view}</p>
                <p className="text-sm">{card.Address}</p>
                <div className="flex items-center gap-x-4 text-sm">
                  {card.features.slice(1).map((feature, index) => (
                    <span key={index} className="flex items-center gap-x-2">
                      <img src={feature.icon} alt={feature.text} className="w-6 h-6" />
                      {feature.text}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          ))}
        </Carousel>

        <div className="sm:hidden block">{/* Render mobile view content */}</div>
      </section>
    </main>
  );
};

export default Pricing9;

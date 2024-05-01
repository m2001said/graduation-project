import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useLocation } from "react-router";
const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const CustomDot = ({ onClick, active }) => {
  return (
    <li className={active ? "" : "text-[var(--white-9)]"} onClick={() => onClick()}>
      {/* <img src="" className="text-5xl" /> */}
    </li>
  );
};

const Hero = () => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template9.hero;
    }
  });
  return (
    <main className="mb-12 pt-4">
      <div className="bg-gradient-to-t from-[var(--primary-text-color-9)] to-[var(--white-9)]  rounded-[560px] rounded-t-none hero9">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen">
          <div className="lg:w-2/5">
            <p className="text-[var(--primary-text-color-9)] md:text-xl text-lg font-medium">{hero.title}</p>
            <h1 className="lg:text-3xl text-3xl font-medium pt-3 pb-12 realestateh">{hero.heading}</h1>
            <p className="text-[var(--color-808080-color-9)] lg:text-base text-sm pb-8 realestateh">{hero.paragraph}</p>
            <div className="w-full lg:w-2/3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                direction="horizontal"
                className="z-30 w-full"
              >
                {hero.carouselImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt="CarouselImage" className="rounded-2xl w-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <form className="shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12 w-full">
            <div className="bg-[var(--primary-text-color-9)] shadow-2xl rounded-3xl py-8">
              <div className="flex justify-between border-b border-[var(--text-9-color)] h-12 px-3">
                <button type="button" className="w-1/2 text-[var(--color-808080-color-9)] focus:border-[var(--button-text-color-9)] cursor-pointer">
                  {hero.buttons && hero.buttons[0]}
                </button>
                <button type="button" className="w-1/2 text-[var(--color-808080-color-9)] focus:border-[var(--button-text-color-9)] cursor-pointer">
                  {hero.buttons && hero.buttons[1]}
                </button>
              </div>
              <div className="py-12 flex flex-col gap-8 px-4">
                <input
                  type="text"
                  placeholder={hero.inputPlaceholders && hero.inputPlaceholders.location}
                  className="h-16 outline-none rounded-3xl bg-[var(--white-9)] border border-[var(--white-9)] px-6"
                />
                <select
                  placeholder={hero.inputPlaceholders && hero.inputPlaceholders.propertyType}
                  className="h-16 outline-none rounded-3xl bg-[var(--white-9)] border border-[var(--white-9)] px-6"
                >
                  <option> Select Property Type</option>
                </select>
                <select
                  placeholder={hero.inputPlaceholders && hero.inputPlaceholders.rooms}
                  className="h-16 outline-none rounded-3xl bg-[var(--white-9)] border border-[var(--white-9)] px-6"
                >
                  <option> Select Rooms</option>
                </select>
                {hero.otherImages && (
                  <span className="flex items-center text-[var(--button-text-color-9)] gap-x-2">
                    <img src={hero.otherImages.settingsIcon} className="text-2xl" alt="Settings Icon" />
                    <p>Advance Search</p>
                  </span>
                )}
                <button
                  type="button"
                  className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-[var(--white-9)]  bg-[var(--button-text-color-9)]"
                >
                  <img src={hero.otherImages && hero.otherImages.searchIcon} alt="Search Icon" className="logo-9" />
                  Search
                </button>
              </div>
              <button className="bg-gradient-to-r from-[var(--icon-hover-color-9)] to-[var(--white-9)] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
            </div>
          </form>
        </div>
      </div>
      <div className="lg: container mx-auto px-3 py-8">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block  bg-gradient-to-r from-[var(--icon-hover-color-9)] to-[var(--white-9)] rounded-full h-24 w-24 cursor-auto">
            {" "}
          </button>
          <p className="text-[var(--color-808080-color-9)] ">Trusted by 100+ companies across the global</p>
        </span>
        <div className="py-12">
          <Swiper modules={[Navigation, Autoplay]} slidesPerView={2} spaceBetween={2} speed={5000} autoplay={{ delay: 100 }} direction="horizontal">
            {hero.otherImages &&
              hero.otherImages.logos &&
              hero.otherImages.logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img src={logo} alt="Company Logo" className="mr-4 h-8" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="lg:flex justify-center lg:mt-16  gap-x-8 lg:px-0 px-3 ">
        <div className="bg-[var(--primary-text-color-9)] rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl ">
          <span className="flex items-center relative h-10 w-44">
            {hero.otherImages &&
              hero.carouselImages &&
              Array.isArray(hero.carouselImages) &&
              hero.carouselImages.map((img, index) => (
                <div key={index} className="lg:mr-7 mr-5 h-full">
                  <img
                    src={img}
                    alt="Customer Image"
                    className="w-10 h-10 rounded-full object-cover absolute bg-[var(--white-9)] border border-[var(--white-9)]"
                  />
                </div>
              ))}
            {hero.otherImages && (
              <button className=" w-8 h-8 rounded-full text-[var(--white-9)] relative flex items-center justify-center">
                <img src={hero.otherImages.plusIcon} alt="Plus Icon" className="logo-9" />
              </button>
            )}
          </span>
          <p className="w-36 md:text-xl font-medium">{hero.customerStats && hero.customerStats.description}</p>
        </div>
        <div className="bg-[var(--icon-hover-color-9)] rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl">
          <span className="flex items-center relative h-10 w-44">
            {hero.otherImages &&
              hero.otherImages.customerImage &&
              Array.isArray(hero.otherImages.customerImage) &&
              hero.otherImages.customerImage.map((img, index) => (
                <div key={index} className="lg:mr-7 mr-5 h-full">
                  <img
                    src={img}
                    alt="Customer Image"
                    className="w-10 h-10 rounded-full object-cover absolute bg-[var(--white-9)] border border-[var(--white-9)]"
                  />
                </div>
              ))}
            {hero.otherImages && (
              <button className=" w-8 h-8 rounded-full text-[var(--white-9)] relative flex items-center justify-center">
                <img src={hero.otherImages.plusIcon} alt="Plus Icon" />
              </button>
            )}
          </span>
          <p className="w-36 md:text-xl font-medium">{hero.newListingStats && hero.newListingStats.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-3 py-16">
        <h1 className="text-center lg:text-4xl text-2xl font-medium pb-8">{hero.subHeading}</h1>
        <div className="flex gap-x-20 justify-center">
          {hero.services &&
            hero.services.map((service, index) => (
              <div key={index} className="w-[240px]">
                <img src={service.image} alt="ServiceImage" className="w-full h-[200px] object-cover rounded-lg" />
                <h3 className="text-lg font-semibold pt-4 pb-2">{service.heading}</h3>
                <p className="text-[var(--color-808080-color-9)]">{service.description}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;

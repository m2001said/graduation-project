import Header from "./Header";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

// ... other imports ...

const Hero8 = () => {
  const { hero } = useSelector((state) => state.template8);

  const scrollDirection = useRef("down");

  useEffect(() => {
    AOS.init({
      duration: 8000,
      once: true,
      mirror: false,
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        if (scrollDirection.current === "down") {
          scrollDirection.current = "up";
          animateOnScrollUp();
        }
      } else {
        scrollDirection.current = "down";
      }
    };

    const animateOnScrollUp = () => {
      // Add your custom animation logic here
      console.log("Scrolling up, add your animations here");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-14 lg:items-center">
            <div className="flex-1 text-center font-secondary lg:text-left">
              <h1 data-aos="fade-up" data-aos-duration="2000" className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
                {hero.Name[0]}{" "}
                <span data-aos="fade-up" data-aos-duration="2000">
                  {hero.Name[1]}
                </span>
              </h1>
              <div data-aos="fade-up" data-aos-duration="2000" className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4" data-aos="fade-up" data-aos-duration="2000">
                  {hero.jop[0]}{" "}
                </span>
                <span data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" className="text-accent">
                  <span>{hero.jop[1]}</span>
                </span>
              </div>
              <p data-aos="fade-up" data-aos-duration="2000" className="mb-8 max-w-lg mx-auto lg:mx-0">
                {hero.description}
              </p>
              <div data-aos="fade-up" data-aos-duration="2000" className="flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0">
                <button data-aos="fade-up" data-aos-duration="2000" className="btn btn-lg">
                  {hero.btnText}
                </button>
                <a href="#" data-aos="fade-up" data-aos-duration="2000" className="text-gradient btn-link">
                  {hero.linktext}
                </a>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                {hero.soialContact.map((socialContact, index) => (
                  <a key={index} href="#" style={{ cursor: "pointer" }}>
                    {socialContact}
                  </a>
                ))}
              </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="2000" className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
              <img src={hero.UrlImg} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero8;

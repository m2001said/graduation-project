import Header from "./Header";
import React, { useEffect, useRef } from "react";
import Image from "../../../../assets/images/images8/avatar.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero8 = () => {
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
                BEN{" "}
                <span data-aos="fade-up" data-aos-duration="2000">
                  AIDEN
                </span>
              </h1>
              <div data-aos="fade-up" data-aos-duration="2000" className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4" data-aos="fade-up" data-aos-duration="2000">
                  I am a{" "}
                </span>
                <span data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" className="text-accent">
                  <span>Developer</span>
                </span>
              </div>
              <p data-aos="fade-up" data-aos-duration="2000" className="mb-8 max-w-lg mx-auto lg:mx-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sequi vel tempora aut voluptatibus accusantium est voluptate perspiciatis omnis
                assumenda.
              </p>
              <div data-aos="fade-up" data-aos-duration="2000" className="flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0">
                <button data-aos="fade-up" data-aos-duration="2000" className="btn btn-lg">
                  Contact me
                </button>
                <a href="#" data-aos="fade-up" data-aos-duration="2000" className="text-gradient btn-link">
                  My portfolio
                </a>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="#" style={{ cursor: "pointer" }}>
                  🚀{/* Unicode character for Rocket */}
                </a>
                <a href="#" style={{ cursor: "pointer" }}>
                  💻{/* Unicode character for Laptop */}
                </a>
                <a href="#" style={{ cursor: "pointer" }}>
                  🎨{/* Unicode character for Palette */}
                </a>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="2000" className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
              <img src={Image} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero8;

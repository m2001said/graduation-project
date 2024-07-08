import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./project4.css";
import { sliderSettings } from "./common";
import { useSelector } from "react-redux";

const Project4 = ({ template }) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects = template ? template.projects : ownProjects;
  return (
    <div id="residencies4" className="r-wrapper4" id={projects.sectionId}>
      <div className="paddings4 innerWidth4 r-container4">
        <div className="flexColStart4 r-head4">
          <span className="orangeText4">{projects.title}</span>
          <span className="primaryText4">{projects.subtitle}</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {projects.projects.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart4 r-card4">
                <img src={card.imgUrl} alt="home" />

                <span className="secondaryText4 r-price4">
                  <span className="sign4">$</span>
                  <span className="price-text4">{card.price}</span>
                </span>
                <span className="primaryText4">{card.name}</span>
                <span className="secondaryText4 text4">{card.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project4;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter4 r-buttons4">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton4 button4">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton4 button4">
        &gt;
      </button>
    </div>
  );
};

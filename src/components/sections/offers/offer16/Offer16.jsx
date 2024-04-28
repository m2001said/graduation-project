import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "./offer16.css";

const Offer16 = () => {
  const { Offer } = useSelector((state) => state.template16);

  return (
    <section className="offer16 section16" id="offer">
      <h2 className="section__title16 " data-title="Offer">
        {Offer.title}
      </h2>
      <Swiper spaceBetween={30} className="container16" onSwiper={(swiper) => (window.swiper = swiper)}>
        <button className="swiper-button16" onClick={() => window.swiper.slidePrev()}>
          &lt; Prev
        </button>
        {Offer.Offer.map(({ image, title, discount, description }, index) => (
          <SwiperSlide className="offer__item16" key={index}>
            <div className="offer__img-wrapper16">
              <img src={image} alt="" className="offer_img16" />
            </div>
            <div className="offer__content16">
              <h3 className="offer__title16">{title}</h3>
              <span className="offer_discount16">{discount}</span>
              <p className="offer__description16">{description}</p>
              <a href="/" className="btn16">
                {Offer.btnOffer}
              </a>
            </div>
          </SwiperSlide>
        ))}
        <button className="swiper-button16" onClick={() => window.swiper.slideNext()}>
          Next &gt;
        </button>
      </Swiper>
    </section>
  );
};

export default Offer16;

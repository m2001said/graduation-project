import React from "react";
import "./hero6.css";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { useSelector } from "react-redux";


const Hero6 = () => {
  const { hero } = useSelector((state) => state.template6);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="design-6">
      <Container>
        <Slider {...settings}>
          {hero.sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 ps-2">
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">{hero.buttonText}</button>
                </div>
                <div className="slider__img w-50">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Hero6;
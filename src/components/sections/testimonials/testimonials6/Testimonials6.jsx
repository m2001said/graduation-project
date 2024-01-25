import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./testimonials6.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials6 = () => {
  const { testimonial } = useSelector((state) => state.template6);

  return (
    <section className="design-6">
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5  ">
              <div className="slider__content w-50">
                <h2 className="mb-4 ps-3">{testimonial.title}</h2>
                <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} className="mySwiper">
                  {testimonial.cards.map((data, index) => (
                    <SwiperSlide key={index}>
                      <div className="single__testimonial">
                        <p className="review__content">{data.content}</p>
                        <h6>{data.name}</h6>
                        <p>{data.role}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="slider__img w-50">
                <img src={testimonial.imgUrl} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials6;

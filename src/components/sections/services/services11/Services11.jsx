import React from "react";
import "./services11.css";
import { useSelector } from "react-redux";
import ServicesBox11 from "../../statistics/statistics11/Statistics11";

const Services11 = () => {
  const { services } = useSelector((state) => state.template11);

  return (
    <>
      <section className="services11 container section" id="services">
        <h2 className="section__title11">Services</h2>
        <div className="services__container11_2 grid11">
          {services.services.map((service) => {
            return (
              <div className="services__card11_2" key={service.id}>
                <img src={service.imgUrl} alt="" className="services__img11_2" />
                <h3 className="services__title11_2">{service.title}</h3>
                <p className="services__description11_2">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <ServicesBox11 />
    </>
  );
};

export default Services11;

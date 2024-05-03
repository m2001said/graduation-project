import React from "react";
import "./services112.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Services11_2 = () => {
  const { pathname } = useLocation();
  const services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template11.services;
    }
  });
  // const { services } = useSelector((state) => state.template11);
  return (
    <section className="services11 container section" id="services">
      <h2 className="section__title11">Services</h2>
      <div className="services__container11_2 grid11">
        {services.datas.map((service) => {
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
  );
};
export default Services11_2;

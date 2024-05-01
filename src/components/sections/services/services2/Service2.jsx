import React from "react";
import "./services2.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Services = () => {
  const { pathname } = useLocation();
  const services = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.services;
    } else {
      return state.template2.services;
    }
  });
  return (
    <section id="services2">
      <h5>{services.title}</h5>
      <h2>{services.subtitle}</h2>

      <div className="container services__container">
        {services.services.map((services, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{services.title}</h3>
            </div>

            <ul className="service__list">
              {services.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <img src={services.icon} alt="" className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

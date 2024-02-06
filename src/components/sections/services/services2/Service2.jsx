import React from "react";
import "./services2.css";
import { useSelector } from "react-redux";

const Services = () => {
  const { services } = useSelector((state) => state.template2);

  return (
    <section id="services2">
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((services, index) => (
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

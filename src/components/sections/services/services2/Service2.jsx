import React from "react";
import "./services2.css";
 
const Services2 = ({ template }) => {
  const services = template.services;
  return (
    <section id="services2" className="section2">
      <h5>{services.title}</h5>
      <h2>{services.description}</h2>

      <div className="container2 services__container">
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

export default Services2;

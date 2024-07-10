import React from "react";
import "./services2.css";
import { useSelector } from "react-redux";

const Services2 = ({ template }) => {
  const ownServices = useSelector((state) => state.ownTemplate.services);
  const services = template ? template.services : ownServices;
  console.log(services);
  return (
    <section id={services.sectionId} className="pb-24 pb-9 section2 services2 w-full">
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

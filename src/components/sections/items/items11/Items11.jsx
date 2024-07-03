import React from "react";
import "./items11.css";

const Items11 = ({ template }) => {
  return (
    <section className="services11 container section" id="items">
      <h2 className="section__title11">{template.items.title}</h2>
      <div className="services__container11_2 grid11">
        {template.items.items.map((item, index) => (
          <div className="services__card11_2" key={index}>
            <img src={item.imgUrl} alt="" className="services__img11_2" />
            <h3 className="services__title11_2">{item.title}</h3>
            <p className="services__description11_2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Items11;

import React from "react";
import "./items11.css";

const Items11 = ({ template }) => {
  return (
    <section className="services11 pt-10 md:pt-16" id={template.items.sectionId}>
      <h2 className="section__title11">{template.items.title}</h2>
      <div className="flex items-center justify-around gap-10 flex-wrap">
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

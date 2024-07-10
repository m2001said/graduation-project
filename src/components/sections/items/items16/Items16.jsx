import React from "react";
import "./items16.css";

const Items16 = ({ template }) => {
  const items = template.items;

  return (
    <section className="menu16 section16" id={items.sectionId}>
      <h2 className="section__title16 " data-title="Our Menu">
        Let's Check Our Menu
      </h2>
      <div className="menu__grid16 container16 grid16">
        {items.items.map(({ imgUrl, title, description, price }, index) => {
          return (
            <div className="menu__item16 grid16" key={index}>
              <div className="menu__img-wrapper16">
                <img src={imgUrl} alt="" className="menu__img16" />
              </div>
              <div className="menu__data16">
                <div>
                  <h3 className="menu__title16">{title}</h3>
                  <p className="menu__description16">{description}</p>
                </div>
                <span className="menu__price16">${price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Items16;

import React, { useState } from "react";
import "../project11/project11.css";
import { useSelector } from "react-redux";

const Project11 = () => {
  const { Project11, Menu11 } = useSelector((state) => state.template11);
  const [items, setItems] = useState(Menu11);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu11.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work11 container section" id="portfolio">
      <h2 className="section__title11">{Project11[0].title[0].titl0}</h2>
      <div className="work__filters11">
        <span className="work__item11" onClick={() => setItems(Menu11)}>
          {Project11[0].title[0].title1}
        </span>
        <span className="work__item11" onClick={() => filterItem("Creative")}>
          {Project11[0].title[0].title2}
        </span>
        <span className="work__item11" onClick={() => filterItem("Art")}>
          {Project11[0].title[0].title3}
        </span>
        <span className="work__item11" onClick={() => filterItem("Design")}>
          {Project11[0].title[0].title4}
        </span>
        <span className="work__item11" onClick={() => filterItem("Branding")}>
          {Project11[0].title[0].title5}
        </span>
      </div>

      <div className="work__container11 grid11">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card11" key={id}>
              <div className="work__thumbnail11">
                <img src={image} alt="" className="work__img11" />
                <div className="work__mask11"></div>
              </div>
              <span className="work__category11">{category}</span>
              <h3 className="work__title11">{title}</h3>
              <a href="#" className="work__button11">
                <img src={Project11[0].imgUrl_iconWork} alt="" className="icon-link-work__button11-icon" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Project11;

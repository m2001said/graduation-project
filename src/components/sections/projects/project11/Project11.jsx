import React, { useState } from "react";
import "../project11/project11.css";
import { useSelector } from "react-redux";

const Project11 = () => {
  const { projects } = useSelector((state) => state.template11);
  const [items, setItems] = useState(projects.Menu11);

  const filterItem = (categoryItem) => {
    const updatedItems = projects.Menu11.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work11 container section" id="portfolio">
      <h2 className="section__title11">{projects.title.titl0}</h2>
      <div className="work__filters11">
        <span className="work__item11" onClick={() => setItems(projects.Menu11)}>
          {projects.title.title1}
        </span>
        <span className="work__item11" onClick={() => filterItem("Creative")}>
          {projects.title.title2}
        </span>
        <span className="work__item11" onClick={() => filterItem("Art")}>
          {projects.title.title3}
        </span>
        <span className="work__item11" onClick={() => filterItem("Design")}>
          {projects.title.title4}
        </span>
        <span className="work__item11" onClick={() => filterItem("Branding")}>
          {projects.title.title5}
        </span>
      </div>

      <div className="work__container11 grid11">
        {items.map((elem) => {
          const { id, imgUrl, title, category } = elem;
          return (
            <div className="work__card11" key={id}>
              <div className="work__thumbnail11">
                <img src={imgUrl} alt="" className="work__img11" />
                <div className="work__mask11"></div>
              </div>
              <span className="work__category11">{category}</span>
              <h3 className="work__title11">{title}</h3>
              <a href="#" className="work__button11">
                <img src={projects.imgUrl} alt="" className="icon-link-work__button11-icon" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project11;

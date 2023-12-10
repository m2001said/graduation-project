import React from "react";
import "./items1.css";
import {useSelector} from 'react-redux'



const Items = () => {
  const { items } = useSelector((state) => state.template);

  return (
    <div className="items1 design-1">
      <div className="items1-header">
        <p className="title-1">{items.title}</p>
        <p className="description-1">{items.description}</p>
      </div>
      <div className="items1-cards">
        {items.cards.map((cards) => (
          <div className="article1-card">
            <div className="article1-card-img">
              <img src={cards.imgUrl} alt="Article 1" />
              <p className="article1-card-caption">{cards.caption}</p>
            </div>
            <div className="article1-card-info">
              <h1>{cards.title}</h1>
              <div className="article1-card-foot">
                <p>{cards.description}</p>
                <a href={"#"} className="article1-card-link">
                  <span>
                    <img src={cards.icon} alt="icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
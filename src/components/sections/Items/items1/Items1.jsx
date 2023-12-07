import React from "react";
import "./Items1.css";
import { useSelector } from "react-redux";
const Articles = () => {
  const {items} = useSelector(state => state.template)
  
  
  return (
    <div className="articles">
      {
        <div className="head">
          <h1>{items.title}</h1>
          <p>{items.description}</p>
        </div>
      }

      <div className="container">
        {items.cards.map((card) => (
          <div className="box article-box " key={card.title}>
            <div className="img">
              <img src={card.imgUrl} alt="Article 1" />
              <p className="caption">{card.caption}</p>
            </div>
            <div className="info">
              <h1>{card.title}</h1>
              <div className="article-foot">
                <p>{card.description}</p>
                <a href={"#"} className="go-to">
                  <span>
                    <img src={card.icon} alt="icon" />
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

export default Articles;

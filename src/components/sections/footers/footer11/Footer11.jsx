import React from "react";
import "../footer11/footer11.css";
import { useSelector } from "react-redux";

const Footer11 = () => {
  const { footer } = useSelector((state) => state.template11);
  return (
    <section className="blog11 container section11" id="blog">
      <h2 className="section__title11">{footer.title}</h2>
      <div className="blog__container11 grid11">
        {footer.cards.map((card, index) => (
          <div className="blog__card11" key={index}>
            <div className="blog__thumb11">
              <a href="#">
                <span className="blog__category11">{card.title}</span>
              </a>
              <a href="#">
                <img src={card.imgUrl} alt="" className="blog__img11" />
              </a>
            </div>
            <div className="blog__details11">
              <h3 className="blog__title11">{card.content}</h3>
              <div className="blog__meta11">
                <span>{card.data}</span>
                <span className="blog__dot">.</span>
                <span>{card.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer11;

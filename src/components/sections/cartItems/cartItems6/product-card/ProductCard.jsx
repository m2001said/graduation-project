import React from "react";
import "./product-card.css";

const ProductCard = ({ item, content }) => {

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={item.imgUrl} alt="" className="w-full" />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          {[1, 2, 3, 4, 5].map((el, index) => (
            <span key={index}> <img src={content.rateIcon} alt="" className="ico" /> </span>
          ))}
        </div>

        <h6>{item.title}</h6>

        <div className=" flex items-center justify-between">
          <span className="price flex items-center">
            {content.subtitle} <span>{item.price}</span>
          </span>
          <span className="shopping__icon">
            <img src={content.icon} alt="" className="ico" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

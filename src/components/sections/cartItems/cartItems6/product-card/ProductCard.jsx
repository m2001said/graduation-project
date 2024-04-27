import React from "react";
import "./product-card.css";
import { useSelector } from "react-redux";

const ProductCard = (props) => {
  const { productCard } = useSelector((state) => state.template6);
  const productcard = productCard;
  const { title, imgUrl, price } = props.item;

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-full" />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          {[1, 2, 3, 4, 5].map((el) => (
            <span> <img src={ ProductCard.rateIcon } alt="" className="ico" /> </span>
          ))}
        </div>

        <h6>{title}</h6>

        <div className=" flex items-center justify-between">
          <span className="price flex items-center">
            { productcard.valueName } <span>{price}</span>
          </span>
          <span className="shopping__icon">
            <img src={productcard.shoppingIcon} alt="" className="ico" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

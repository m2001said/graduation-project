import React from "react";
import "./product-card.css";
import star from "../../../../../assets/images/images6/star-s-fill.svg";
import { useSelector } from "react-redux";

const ProductCard = (props) => {
  const { productcard } = useSelector((state) => state.template6);
  const { title, imgUrl, price } = props.item;

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          {[1, 2, 3, 4, 5].map((el) => (
            <span>
              <img src={star} alt="" className="ico" />
            </span>
          ))}
        </div>

        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
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

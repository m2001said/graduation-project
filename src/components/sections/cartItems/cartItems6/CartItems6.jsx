import React from "react";
import ProductCard from "./product-card/ProductCard";
import "./cartItems6.css";
import { useSelector } from "react-redux";

const CartItems6 = () => {
  const { menu } = useSelector((state) => state.template6);
  const CartItems = menu;

  return (
    <section className="pt-0 design-6" id="Menu">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full mb-5">
            <h2 className="popular__menu-title">{CartItems.title}</h2>
          </div>
          {CartItems.popularMenuFood.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2">
              <ProductCard item={item} content={CartItems.Card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartItems6;

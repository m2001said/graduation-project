import React from "react";
import ProductCard from "./product-card/ProductCard";
import "./cartItems6.css";
import { useSelector } from "react-redux";

const CartItems6 = () => {
  const { CartItems } = useSelector((state) => state.template6);

  return (
    <section className="pt-0 design-6" id="Menu">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full mb-5">
            <h2 className="popular__menu-title">{CartItems.Title}</h2>
          </div>
          {CartItems.popularMenuFood.map((item) => (
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-2" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartItems6;

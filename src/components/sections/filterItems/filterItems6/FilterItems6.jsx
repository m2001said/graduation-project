import "./filterItems6.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../../CartItems/cartItems6/product-card/ProductCard";
import { useSelector } from "react-redux";

const FilterItems6 = () => {
  const { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } = useSelector((state) => state.template6.FilterItems);

  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }

    if (filter === "COFFEE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section className="design-6" id="Recipes">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="text-center w-full mb-4">
            <h3 className="menu__title">Our Menu Pack</h3>
          </div>
          <div className="text-center w-full mb-5">
            <button className={`filter-btn ${filter === "FAST-FOOD" ? "active__btn" : ""}`} onClick={() => setFilter("FAST-FOOD")}>
              Fast Food
            </button>
            <button className={`filter-btn ${filter === "RICE-MENU" ? "active__btn" : ""}`} onClick={() => setFilter("RICE-MENU")}>
              Rice Menu
            </button>
            <button className={`filter-btn ${filter === "PIZZA" ? "active__btn" : ""}`} onClick={() => setFilter("PIZZA")}>
              Pizza
            </button>
            <button className={`filter-btn ${filter === "DESSERT" ? "active__btn" : ""}`} onClick={() => setFilter("DESSERT")}>
              Desserts
            </button>
            <button className={`filter-btn ${filter === "COFFEE" ? "active__btn" : ""}`} onClick={() => setFilter("COFFEE")}>
              Coffee
            </button>
          </div>

          {products.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2  mb-4">
              {" "}
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterItems6;

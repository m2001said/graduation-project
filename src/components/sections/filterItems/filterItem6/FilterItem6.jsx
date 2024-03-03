import "./filterItems6.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../../CartItems/cartItems6/product-card/ProductCard";
import { useSelector } from "react-redux";

const FilterItems6 = () => {
  const { menuTitle, ...allProducts } = useSelector((state) => state.template6.FilterItems);

  const [filter, setFilter] = useState("RICE MENU");
  const [products, setProducts] = useState(allProducts[filter]);

  useEffect(() => {
    setProducts(allProducts[filter]);
  }, [filter, allProducts]);

  return (
    <section className="design-6" id="Recipes">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="text-center w-full mb-4">
            <h3 className="menu__title">{menuTitle}</h3>
          </div>
          <div className="text-center w-full mb-5">
            {Object.keys(allProducts).map((category) => (
              <button key={category} className={`filter-btn ${filter === category ? "active__btn" : ""}`} onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>

          {products.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default FilterItems6;

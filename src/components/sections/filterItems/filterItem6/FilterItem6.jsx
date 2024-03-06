import "./filterItems6.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../../CartItems/cartItems6/product-card/ProductCard";
import { useSelector } from "react-redux";

const FilterItems = () => {
  const { menuTitle, filterContent } = useSelector((state) => state.template6.products);

  const [filter, setFilter] = useState(filterContent[0].title); // Set initial filter to the first category
  const [products, setProducts] = useState(filterContent.find(category => category.title === filter)?.content || []);

  useEffect(() => {
    const selectedCategory = filterContent.find(category => category.title === filter);
    setProducts(selectedCategory?.content || []);
  }, [filter, filterContent]);

  return (
    <section className="design-6" id="Recipes">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="text-center w-full mb-4">
            <h3 className="menu__title">{menuTitle}</h3>
          </div>
          <div className="text-center w-full mb-5">
            {filterContent.map((category) => (
              <button key={category.title} className={`filter-btn ${filter === category.title ? "active__btn" : ""}`} onClick={() => setFilter(category.title)}>
                {category.title}
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
export default FilterItems;

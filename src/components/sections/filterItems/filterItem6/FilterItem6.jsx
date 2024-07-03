import "./filterItems6.css";
import React, { useState, useEffect } from "react";
import ProductCard from "../../cartItems/cartItems6/product-card/ProductCard";

const FilterItems = ({ template }) => {
  const { title, subtitle, icon, rateIcon, products } = template.products;

  const [filter, setFilter] = useState(products[0].title); // Set initial filter to the first category

  const [selectedProducts, setSelectedProducts] = useState(products.find((category) => category.title === filter)?.items || []);

  useEffect(() => {
    const selectedCategory = products.find((category) => category.title === filter);

    setSelectedProducts(selectedCategory?.items || []);
  }, [filter, products]);

  return (
    <section className="design-6" id="Recipes">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="text-center w-full mb-4">
            <h3 className="menu__title">{title}</h3>
          </div>
          <div className="text-center w-full mb-5">
            {products.map((category) => (
              <button key={category.title} className={`filter-btn ${filter === category.title ? "active__btn" : ""}`} onClick={() => setFilter(category.title)}>
                {category.title}
              </button>
            ))}
          </div>

          {selectedProducts.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-4">
              <ProductCard item={item} content={{ subtitle, icon, rateIcon }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FilterItems;

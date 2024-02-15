import React from "react";
import "./yourPage.css"
import hero6 from "../../assets/images/designs/hero6.jpg"
const YourPage = () => {
  return (
    <div className="own-page container mx-auto px-4  py-4">
    <div className="group text">
        <p className="title">Website description</p>
        <textarea name="text" id="text"></textarea>
      </div>
      <div className="group">
        <p className="title">Hero sections</p>
        <input type="radio" name="Hero" id="i1" />
        <label htmlFor="i1">
          <img src={hero6} alt="Hero Section 1" />
        </label>

        <input type="radio" name="Hero" id="i2" />
        <label htmlFor="i2">
          <img src={hero6} alt="Hero Section 2" />
        </label>
      </div>
      <div className="group">
        <p className="title">Testimonials sections</p>
        <input type="radio" name="Testimonials" id="i3" />
        <label htmlFor="i3">
          <img src={hero6} alt="Testimonials Section 1" />
        </label>

        <input type="radio" name="Testimonials" id="i4" />
        <label htmlFor="i4">
          <img src={hero6} alt="Testimonials Section 2" />
        </label>

        <input type="radio" name="Testimonials" id="i5" />
        <label htmlFor="i5">
          <img src={hero6} alt="Testimonials Section 3" />
        </label>
      </div>
    </div>
  );
};

export default YourPage;

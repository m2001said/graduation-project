import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./yourPage.css";
import InputsGroup from "./InputsGroup";
import { heroData, testimonialData, footerData } from "./sectionsData";


const YourPage = () => {
  const [heroIndexSelected, setHeroIndexSelected] = useState(1);
  const [testimonialIndexSelected, setTestimonialIndexSelected] = useState(1);
  const [footerIndexSelected, setFooterIndexSelected] = useState(1);

  const navigate = useNavigate();

  const handleHeroIndexChange = (e) => {
    const { value } = e.target;
    setHeroIndexSelected(parseInt(value, 10));
  };

  const handleTestimonialIndexChange = (e) => {
    const { value } = e.target;
    setTestimonialIndexSelected(parseInt(value, 10));
  };

  const handleFooterIndexChange = (e) => {
    const { value } = e.target;
    setFooterIndexSelected(parseInt(value, 10));
  };

  const handleSubmit = () => {
    navigate('/own-page', { state: { heroIndexSelected, testimonialIndexSelected,footerIndexSelected } });
  };


  return (
    <div className="own-page ">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold tracking-tighter py-8 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Build Your Own Page</h1>
        <div className="group text">
          <p className="title">Website description</p>
          <textarea name="text" id="text"></textarea>
        </div>

        <div className="group">
          <p className="title">Hero sections</p>
          {heroData.map((hero) => (
            <InputsGroup
              key={hero.id}
              data={hero}
              selectedIndex={heroIndexSelected}
              handleIndexChange={handleHeroIndexChange}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">Testimonial sections</p>
          {testimonialData.map((testimonial) => (
            <InputsGroup
              key={testimonial.id}
              data={testimonial}
              selectedIndex={testimonialIndexSelected}
              handleIndexChange={handleTestimonialIndexChange}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">footer sections</p>
          {footerData.map((footer) => (
            <InputsGroup
              key={footer.id}
              data={footer}
              selectedIndex={footerIndexSelected}
              handleIndexChange={handleFooterIndexChange}
            />
          ))}
        </div>

        <button className='generate-own-btn' onClick={handleSubmit}>Generate your website</button>
      </div>

    </div>
  );
};

export default YourPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./yourPage.css";
import heroImages from "../../assets/images/designs/hero6.jpg"; // Assuming you have images for all hero sections

const YourPage = () => {
  const [selectedData, setSelectedData] = useState({
    indexSelected: 1,
  });

  const navigate = useNavigate();

  const handleIndexChange = (e) => {
    const { value } = e.target;
    setSelectedData((prevSelectedData) => ({
      ...prevSelectedData,
      indexSelected: parseInt(value, 10),
    }));
  };

  const handleSubmit = () => {
    navigate('/own-page', { state: { selectedData } });
  };

  const heroData = [
    { id: 1, name: 'Hero1' },
    { id: 2, name: 'Hero2' },
    { id: 3, name: 'Hero3' },
    { id: 4, name: 'Hero4' },
    { id: 5, name: 'Hero5' },
    { id: 6, name: 'Hero6' },
    { id: 7, name: 'Hero7' },
    { id: 8, name: 'Hero8' },
    { id: 9, name: 'Hero9' },
    { id: 10, name: 'Hero10' },
  ];

  return (
    <div className="own-page container mx-auto px-4 py-4">
      <div className="group text">
        <p className="title">Website description</p>
        <textarea name="text" id="text"></textarea>
      </div>
      <div className="group">
        <p className="title">Hero sections</p>
        {heroData.map((hero) => (
          <div key={hero.id}>
            <input
              type="radio"
              id={hero.name}
              name="index"
              value={hero.id}
              checked={selectedData.indexSelected === hero.id}
              onChange={handleIndexChange}
            />
            <label htmlFor={hero.name}>
              <img src={heroImages} alt={`Hero Section ${hero.id}`} />
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourPage;

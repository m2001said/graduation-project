import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/yourPage/yourPage.css"
import InputOption from "../components/yourPage/InputsGroup";
import { getSectionData } from "../components/yourPage/getSectionData";

const BuildYourPage = () => {

  const sectionNames = [
    'navbars', 'heros', 'features', 'abouts', 'projects', 'services', 'contacts', 'teams',
    'testimonials', 'statistics', 'logos', 'items', 'gallerys', 'offers', 'reservations', 'menus', 'cartItems', 'filterItems',
    'orderPopups', 'chooses', 'pricings', 'ctas', 'footers',
  ];

  const [selectedIndices, setSelectedIndices] = useState(
    Object.fromEntries(sectionNames.map(name => [name, undefined]))
  );

  const [checkError, setCheckError] = useState(false);
  const navigate = useNavigate();

  const handleIndexChange = (section) => (e) => {
    const { value } = e.target;

    // If the checkbox is unchecked, set the selected index to undefined
    const selectedIndex = selectedIndices[section] === parseInt(value, 10) ? undefined : parseInt(value, 10);
    setSelectedIndices(prevState => ({ ...prevState, [section]: selectedIndex }));
  };

  const removeIndexChange = (section) => (e) => {
    const selectedIndex = undefined;
    setSelectedIndices(prevState => ({ ...prevState, [section]: selectedIndex }));
  };

  const handleSubmit = () => {
    const selectedSections = {};
    // Check if a section is selected and not equal to the default value (undefined) before sending it
    sectionNames.forEach((section) => {
      if (selectedIndices[section] !== undefined) {
        selectedSections[`${section}IndexSelected`] = selectedIndices[section];
      }
    });

    const selectedSectionCount = Object.values(selectedSections).filter(val => val !== undefined).length;
    if (selectedSectionCount < 3 || !selectedIndices["heros"] || !selectedIndices["navbars"] || !selectedIndices["footers"]) {
      setCheckError(true);
    } else {
      navigate('/own-page', { state: selectedSections });
    }
  };

  return (
    <div className="own-page ">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold tracking-tighter py-8 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Build Your Own Page</h1>
        <div className="group text">
          <p className="title">Website description</p>
          <textarea name="text" id="text"></textarea>
        </div>

        {sectionNames.map((section, index) => (
          <div key={section}>
            <label htmlFor={`show${index}`} className="show-section">
              <p className="title">{`${section} sections`}</p>
              <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1709052019/jammal_photos/vdybrjarzdlo6x9fdwga.svg" alt="down-icon" />
            </label>
            <input type="checkbox" name="show" className='show-btn' id={`show${index}`} onChange={removeIndexChange(section)} />
            <div className="group">
              <InputOption item={getSectionData(section)} section={section} selectedIndex={selectedIndices[section]} handleIndexChange={handleIndexChange} />
            </div>
          </div>
        ))}

        <button className='generate-own-btn' onClick={handleSubmit}>Generate your website</button>
        <div className={`error-message ${checkError ? "active" : ""}  flex justify-center items-center gap-4`}>
          <img src="https://res.cloudinary.com/dvp3nyulf/image/upload/v1710190698/warning.png" alt="" />
          <p>Select a minimum of<span className='important'> 3 </span>sections, including
            <span className='important'> Navbar</span>,
            <span className='important'> Hero</span>,
            <span className='important'> Footer</span>,
          </p>
        </div>
      </div>
    </div>
  );
};


export default BuildYourPage;

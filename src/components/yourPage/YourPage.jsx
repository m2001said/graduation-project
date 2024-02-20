import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./yourPage.css";
import InputsGroup from "./InputsGroup";
import { getSectionData } from "./getSectionData";


const YourPage = () => {
  const sectionNames = [
    'hero', 'testimonial', 'footer', 'nav', 'feature', 'cta', 'pricing',
    'project', 'service', 'team', 'statistic', 'contact', 'logo',
    'item', 'cartItem', 'filterItem', 'orderPopup',
  ];

  const [selectedIndices, setSelectedIndices] = useState(
    Object.fromEntries(sectionNames.map(name => [name, undefined]))
  );

  const [checkError, setCheckError] = useState(false);
  const navigate = useNavigate();

  const handleIndexChange = (section) => (e) => {
    const { value } = e.target;
    setSelectedIndices(prevState => ({ ...prevState, [section]: parseInt(value, 10) }));
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
    if (selectedSectionCount < 3) {
      setCheckError(true);
    } else {
      navigate('/own-page', { state: selectedSections });
    }
  };

  const renderInputsGroup = (data, section) => {
    return data.map((item) => (
      <InputsGroup
        key={item.id}
        data={item}
        selectedIndex={selectedIndices[section]}
        handleIndexChange={handleIndexChange(section)}
      />
    ));
  };

  return (
    <div className="own-page ">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold tracking-tighter py-8 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Build Your Own Page</h1>
        <div className="group text">
          <p className="title">Website description</p>
          <textarea name="text" id="text"></textarea>
        </div>

        {sectionNames.map((section) => (
          <div className="group" key={section}>
            <p className="title">{`${section} sections`}</p>
            {renderInputsGroup(getSectionData(section), section)}
          </div>
        ))}

        <button className='generate-own-btn' onClick={handleSubmit}>Generate your website</button>
        {checkError && <p className="error-message"> select at least 3 sections.</p>}
      </div>
    </div>
  );
};

export default YourPage;
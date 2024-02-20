import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./yourPage.css";
import InputsGroup from "./InputsGroup";
import { heroData, ctaData, footerData, navData, contactData } from "./sectionsData";

const YourPage = () => {
  const sectionNames = ['hero', 'testimonial', 'footer', 'nav', 'feature', 'cta', 'pricing', 'project', 'service', 'team', 'statistic', 'contact'];
  const [selectedIndices, setSelectedIndices] = useState(Object.fromEntries(sectionNames.map(name => [name, undefined])));
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
      setCheckError(false);
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

        <div className="group">
          <p className="title">Navbar sections</p>
          {navData.map((nav) => (
            <InputsGroup
              key={nav.id}
              data={nav}
              selectedIndex={selectedIndices.nav}
              handleIndexChange={handleIndexChange('nav')}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">Hero sections</p>
          {heroData.map((hero) => (
            <InputsGroup
              key={hero.id}
              data={hero}
              selectedIndex={selectedIndices.hero}
              handleIndexChange={handleIndexChange('hero')}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">Cta sections</p>
          {ctaData.map((cta) => (
            <InputsGroup
              key={cta.id}
              data={cta}
              selectedIndex={selectedIndices.cta}
              handleIndexChange={handleIndexChange('cta')}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">contact sections</p>
          {contactData.map((contact) => (
            <InputsGroup
              key={contact.id}
              data={contact}
              selectedIndex={selectedIndices.contact}
              handleIndexChange={handleIndexChange('contact')}
            />
          ))}
        </div>

        <div className="group">
          <p className="title">footer sections</p>
          {footerData.map((footer) => (
            <InputsGroup
              key={footer.id}
              data={footer}
              selectedIndex={selectedIndices.footer}
              handleIndexChange={handleIndexChange('footer')}
            />
          ))}
        </div>
        <button className='generate-own-btn' onClick={handleSubmit}>Generate your website</button>
        {checkError && <p className='select-message'>Select at least 3 sections </p>}
      </div>
    </div>
  );
};

export default YourPage;

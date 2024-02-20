import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./yourPage.css";
import InputsGroup from "./InputsGroup";
import { heroData, ctaData, footerData, navData, contactData } from "./sectionsData";

const YourPage = () => {
  const defaultValues = {
    'hero': 1,
    'testimonial': 1,
    'footer': 1,
    'nav': 1,
    'feature': 1,
    'cta': 1,
    'pricing': 1,
    'project': 1,
    'service': 1,
    'team': 1,
    'statistic': 1,
    'contact': 4
  };
  
  const sectionNames = ['hero', 'testimonial', 'footer', 'nav', 'feature', 'cta', 'pricing', 'project', 'service', 'team', 'statistic','contact'];
  const [selectedIndices, setSelectedIndices] = useState(
    sectionNames.reduce((acc, curr) => {
      return { ...acc, [curr]: defaultValues[curr] };
    }, {})
  );

  const navigate = useNavigate();

  const handleIndexChange = (section) => (e) => {
    const { value } = e.target;
    setSelectedIndices(prevState => ({ ...prevState, [section]: parseInt(value, 10) }));
  };

  const handleSubmit = () => {
    const selectedSections = {};

    // Check if a section is selected before sending it
    sectionNames.forEach((section) => {
      if (selectedIndices[section]) {
        selectedSections[`${section}IndexSelected`] = selectedIndices[section];
      }
    });

    navigate('/own-page', { state: selectedSections });
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
      </div>
    </div>
  );
};

export default YourPage;

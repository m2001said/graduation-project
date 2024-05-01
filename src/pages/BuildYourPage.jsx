import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/yourPage/yourPage.css";
import InputOption from "../components/yourPage/ChooseOption";
import { getSectionData } from "../components/yourPage/getSectionData";
import { useDispatch, useSelector } from "react-redux";

import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
const BuildYourPage = () => {
  const sectionNames = [
    "navbar",
    "hero",
    "features",
    "projects",
    "services",
    "contact",
    "team",
    "testimonials",
    "statistics",
    "logos",
    "items",
    "pricing",
    "cta",
    "footer",
  ];

  //   //  for handle dashboard
  const dispatch = useDispatch();
  const templates = useSelector((state) => ({
    1: state.template1,
    2: state.template2,
    3: state.template3,
    4: state.template4,
    5: state.template5,
    6: state.template6,
    7: state.template7,
    8: state.template8,
    9: state.template9,
    10: state.template10,
    11: state.template11,
    12: state.template12,
    13: state.template13,
    14: state.template14,
    15: state.template15,
    16: state.template16,
    17: state.template17,
    18: state.template18,
  }));
  const [selectedIndices, setSelectedIndices] = useState(Object.fromEntries(sectionNames.map((name) => [name, undefined])));

  const [checkError, setCheckError] = useState(false);
  const navigate = useNavigate();

  const handleIndexChange = (section, id) => {
    // If the checkbox is unchecked, set the selected index to undefined
    const selectedIndex = selectedIndices[section] === id ? undefined : id;
    setSelectedIndices((prevState) => ({ ...prevState, [section]: selectedIndex }));
  };

  const removeIndexChange = (section) => () => {
    const selectedIndex = undefined;
    setSelectedIndices((prevState) => ({ ...prevState, [section]: selectedIndex }));
  };

  const handleSubmit = () => {
    const selectedSections = {};
    const userSectionSelection = [];
    // Check if a section is selected and not equal to the default value (undefined) before sending it
    sectionNames.forEach((section) => {
      if (selectedIndices[section] !== undefined) {
        selectedSections[`${section}IndexSelected`] = selectedIndices[section];
        userSectionSelection.push({
          sectionName: section,
          templateId: selectedIndices[section],
        });
      }
    });

    const selectedSectionCount = Object.values(selectedSections).filter((val) => val !== undefined).length;
    if (selectedSectionCount < 3 || !selectedIndices["hero"] || !selectedIndices["navbar"] || !selectedIndices["footer"]) {
      setCheckError(true);
    } else {
      let userSchema = {};
      userSectionSelection.map((state) => {
        for (const key in templates) {
          if (state.templateId.toString() === key.toString()) {
            userSchema[state.sectionName] = templates[key][state.sectionName];
          }
        }
        return null;
      });
      dispatch(ownTemplateActions.insertSections({ data: userSchema }));

      navigate("/own-page", { state: selectedSections });
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
            <input type="checkbox" name="show" className="show-btn" id={`show${index}`} onChange={removeIndexChange(section)} />
              <InputOption item={getSectionData(section)} section={section} handleIndexChange={handleIndexChange} />
          </div>
        ))}

        <button className="generate-own-btn" onClick={handleSubmit}>
          Generate your website
        </button>
        <div className={`error-message ${checkError ? "active" : ""}  flex justify-center items-center gap-4`}>
          <img src="https://res.cloudinary.com/dvp3nyulf/image/upload/v1710190698/warning.png" alt="" />
          <p>
            Select a minimum of<span className="important"> 3 </span>sections, including
            <span className="important"> Navbar</span>,<span className="important"> Hero</span>,<span className="important"> Footer</span>,
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildYourPage;

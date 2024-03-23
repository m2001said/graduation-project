import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/yourPage/yourPage.css";
import InputOption from "../components/yourPage/InputsGroup";
import { getSectionData } from "../components/yourPage/getSectionData";
import { useDispatch, useSelector } from "react-redux";

import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
const BuildYourPage = () => {
  const sectionNames = [
    "navbar",
    "hero",
    "features",
    "about",
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
  const template1 = useSelector((state) => state.template1);
  const template2 = useSelector((state) => state.template2);
  const template3 = useSelector((state) => state.template3);
  const template4 = useSelector((state) => state.template4);
  const template5 = useSelector((state) => state.template5);
  const template6 = useSelector((state) => state.template6);
  const template7 = useSelector((state) => state.template7);
  const template8 = useSelector((state) => state.template8);
  const template9 = useSelector((state) => state.template9);
  const template10 = useSelector((state) => state.template10);
  const template11 = useSelector((state) => state.template11);
  const template12 = useSelector((state) => state.template12);
  const template13 = useSelector((state) => state.template13);
  const template14 = useSelector((state) => state.template14);
  const template15 = useSelector((state) => state.template15);
  const template16 = useSelector((state) => state.template16);
  const template17 = useSelector((state) => state.template17);
  const template18 = useSelector((state) => state.template18);

  const templates = {
    1: template1,
    2: template2,
    3: template3,
    4: template4,
    5: template5,
    6: template6,
    7: template7,
    8: template8,
    9: template9,
    10: template10,
    11: template11,
    12: template12,
    13: template13,
    14: template14,
    15: template15,
    16: template16,
    17: template17,
    18: template18,
  };
  const [selectedIndices, setSelectedIndices] = useState(Object.fromEntries(sectionNames.map((name) => [name, undefined])));

  const [checkError, setCheckError] = useState(false);
  const navigate = useNavigate();

  const handleIndexChange = (section) => (e) => {
    const { value } = e.target;

    // If the checkbox is unchecked, set the selected index to undefined
    const selectedIndex = selectedIndices[section] === parseInt(value, 10) ? undefined : parseInt(value, 10);
    setSelectedIndices((prevState) => ({ ...prevState, [section]: selectedIndex }));
  };

  const removeIndexChange = (section) => (e) => {
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
            <div className="group">
              <InputOption item={getSectionData(section)} section={section} selectedIndex={selectedIndices[section]} handleIndexChange={handleIndexChange} />
            </div>
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

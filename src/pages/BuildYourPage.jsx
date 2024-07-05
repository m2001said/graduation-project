import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/yourPage/yourPage.css";
import InputOption from "../components/yourPage/ChooseOption";
import { getSectionData } from "../components/yourPage/getSectionData";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
import { fetchInitialTemplate } from "../features/templateData/templateSlice";

const palettes = [
  ["#FFFAF3", "#F1C40F", "#E67E22", "#E74C3C", "#8E44AD"],
  ["#D1E8E4", "#A3D5D3", "#69BEB9", "#3C787E", "#27476E"],
  ["#F5F3BB", "#C7F0BD", "#7DBBC3", "#607196", "#5C3C92"],
  ["#F8F4E3", "#F1DCA7", "#F9A870", "#E68364", "#966C6C"],
  ["#E1F7E7", "#A9E5BB", "#74C6A5", "#56A6A6", "#405D64"],
  ["#F4EDE8", "#D9B5B5", "#A28A8A", "#6C6461", "#5A5351"],
  ["#FAF9F6", "#F2E9E1", "#EAD5D5", "#B7B2A7", "#837D7A"],
  ["#FEFBE7", "#F3DFA2", "#E8A87C", "#C38D9E", "#8E7C93"],
  ["#FFFBF5", "#E1ECE5", "#C1DED1", "#AAC8C6", "#80746D"],
  ["#FFFDFD", "#F4C2C2", "#E9A9A9", "#B6B6A6", "#7B7B7B"],
  ["#F0F8FF", "#ACE5EE", "#8DD3C7", "#60B6B8", "#3B7A82"],
  ["#FFFAF0", "#F3EACB", "#E2CFC4", "#C7B198", "#A67C67"],
  ["#FFF5EE", "#FFD1B3", "#FFA07A", "#CD5C5C", "#8B4513"],
  ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#BA55D3"],
  ["#F5F5F5", "#D3D3D3", "#A9A9A9", "#696969", "#2F4F4F"],
  ["#FFE4C4", "#DEB887", "#D2B48C", "#BC8F8F", "#A0522D"],
  ["#FDF5E6", "#FAEBD7", "#FFEFDB", "#FFEBCD", "#FFE4C4"],
  ["#FFF8DC", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#FFD700"],
  ["#F5FFFA", "#E0FFFF", "#AFEEEE", "#40E0D0", "#20B2AA"],
  ["#FFF0F5", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093"],
];

const BuildYourPage = () => {
  const { i18n } = useTranslation();
  const sectionNames = ["navbar", "hero", "features", "projects", "services", "contact", "team", "testimonials", "footer"];

  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(0);

  const handleColorChange = (paletteIndex) => {
    setSelectedColor(paletteIndex);
  };

  const [templates, setTemplates] = useState({});
  useEffect(() => {
    const fetchTemplates = async () => {
      const templatesData = {};
      for (let i = 1; i <= 18; i++) {
        const template = await dispatch(fetchInitialTemplate(i)).unwrap();
        templatesData[i] = template;
      }
      setTemplates(templatesData);
    };
    fetchTemplates();
  }, [dispatch]);

  // const [selectedIndices, setSelectedIndices] = useState(Object.fromEntries(sectionNames.map((name) => [name, undefined])));

  const initialSelectedValues = Object.fromEntries(sectionNames.map((name) => [name, undefined]));
  initialSelectedValues["navbar"] = 1;
  initialSelectedValues["hero"] = 1;
  initialSelectedValues["footer"] = 1;

  const [selectedIndices, setSelectedIndices] = useState(initialSelectedValues);

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

      navigate(`/${i18n.language}/own-page`, { state: selectedSections });
    }
  };

  return (
    <div className="own-page">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tighter py-8 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Build Your Own Page</h1>

        {sectionNames.map((section, index) => (
          <div key={index} className="w-full">
            <label htmlFor={`show${index}`} className="show-section justify-between">
              <p className="title">{`${section} sections`}</p>
              <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1709052019/jammal_photos/vdybrjarzdlo6x9fdwga.svg" alt="down-icon" />
            </label>
            <input type="checkbox" name="show" className="show-btn" id={`show${index}`} onChange={removeIndexChange(section)} />
            <InputOption item={getSectionData(section)} section={section} handleIndexChange={handleIndexChange} />
          </div>
        ))}

        <p className="show-section title">choose website colors</p>

        <div className="show-section flex gap-4 flex-wrap justify-between">
          {palettes.map((palette, paletteIndex) => (
            <>
              <div
                key={paletteIndex}
                className={`flex flex-col`}
                style={{ position: "relative", border: selectedColor === paletteIndex ? "solid 2px var(--color-3)" : "solid 2px transparent" }}
              >
                {selectedColor == paletteIndex && (
                  <div className="check-icon">
                    <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg" alt="check-icon" />
                  </div>
                )}
                {palette.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    style={{
                      width: "150px",
                      height: "30px",
                      backgroundColor: color,
                      cursor: "pointer",
                    }}
                    onClick={() => handleColorChange(paletteIndex)}
                  />
                ))}
              </div>
            </>
          ))}
        </div>

        <button
          className="flex-none rounded-md bg-indigo-500 px-3.5 my-4 mx-auto py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={handleSubmit}
        >
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

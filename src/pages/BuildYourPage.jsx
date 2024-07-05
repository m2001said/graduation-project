import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/yourPage/yourPage.css";
import InputOption from "../components/yourPage/ChooseOption";
import { getSectionData } from "../components/yourPage/getSectionData";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
import { fetchInitialTemplate } from "../features/templateData/templateSlice";

const palettes = [
  ["#FFFAF3", "#F1C40F", "#E67E22", "#E74C3C", "#8E44AD", "#3498DB"],
  ["#F5F3BB", "#C7F0BD", "#7DBBC3", "#607196", "#5C3C92", "#4A256D"],
  ["#F8F4E3", "#F1DCA7", "#F9A870", "#E68364", "#966C6C", "#684A4A"],
  ["#F4EDE8", "#D9B5B5", "#A28A8A", "#6C6461", "#5A5351", "#3F3735"],
  ["#9C27B0", "#BA68C8", "#CE93D8", "#F48FB1", "#FFCDD2", "#D81B60"],
  ["#FFFBF5", "#E1ECE5", "#C1DED1", "#AAC8C6", "#80746D", "#5A514D"],
  ["#FFFDFD", "#F4C2C2", "#E9A9A9", "#B6B6A6", "#7B7B7B", "#535353"],
  ["#F0F8FF", "#ACE5EE", "#8DD3C7", "#60B6B8", "#3B7A82", "#265466"],
  ["#FFFAF0", "#F3EACB", "#E2CFC4", "#C7B198", "#A67C67", "#70564A"],
  ["#FFF5EE", "#FFD1B3", "#FFA07A", "#CD5C5C", "#8B4513", "#602E1A"],
  ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#BA55D3", "#8A2BE2"],
  ["#F5F5F5", "#D3D3D3", "#A9A9A9", "#696969", "#2F4F4F", "#1C1C1C"],
  ["#FFE4C4", "#DEB887", "#D2B48C", "#BC8F8F", "#A0522D", "#8B4513"],
  ["#FDF5E6", "#FAEBD7", "#FFEFDB", "#FFEBCD", "#FFE4C4", "#FFDAB9"],
  ["#FFF8DC", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#FFD700", "#FFC700"],
  ["#FFD700", "#FFA500", "#FF8C00", "#FF4500", "#DC143C", "#B22222"],
  ["#87CEFA", "#4682B4", "#1E90FF", "#4169E1", "#0000CD", "#00008B"],
  ["#FFDAB9", "#FFE4B5", "#FFA07A", "#FA8072", "#E9967A", "#FF6347"],
  ["#FFFACD", "#FAFAD2", "#FFEFD5", "#FFDAB9", "#FFE4B5", "#FFD700"],
  ["#8B4A39", "#A0613D", "#D8CAB3", "#B7B094", "#73715F", "#EFE5CE"],
  ["#FC6A57", "#F9BFAF", "#FFF6F3", "#268A91", "#024E5C", "#F9BF3D"],
  ["#FCD4CE", "#FAD3CF", "#FCE8E6", "#EFF5F4", "#D1D8D3", "#E0E0D7"],
  ["#C1BAAE", "#E4DFCF", "#D6D2C3", "#8A8E75", "#A8B090", "#CFA174"],
  ["#C9B39B", "#E9DDC7", "#CFB395", "#A68A6A", "#704C35", "#60492D"],
  ["#FF69B4", "#FF6EB4", "#FFAEB9", "#ADDFE0", "#7CC0D8", "#34B1BF"],
  ["#4C2C3C", "#B0A8B9", "#CCA9B7", "#E1BF8A", "#D6A474", "#E1C8B5"],
  ["#FC6C57", "#D9E5CC", "#FAEDDE", "#A2D7D5", "#868F77", "#2C593F"],
  ["#B4AEBA", "#8A7B7D", "#BDB7B3", "#E6DDD7", "#ADADAD", "#D1CFCA"],
  ["#E14B4B", "#D8A768", "#FFD87B", "#76C39A", "#4DBEA1", "#0C5E4C"],
  ["#FF6F61", "#FFB7B2", "#FFD1BA", "#FFC107", "#FFEB3B", "#F4E04D"],
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
                      width: "120px",
                      height: "25px",
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

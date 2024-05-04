import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "./ColorPicker";
import chroma from "chroma-js";
import db from "../../../assets/images/picker.jpg";

const ColorController = ({ targetTemplate, updateAll }) => {
  const [open, setOpen] = useState(false);

  // const { colors } = useSelector((state) => state.template);
  const colors = targetTemplate.colors;
  const templateColors = Object.keys(colors)[0];
  const dispatch = useDispatch();
  const [webColors, setWebColors] = useState(colors.templateColors);

  const handleChange = (e, index) => {
    const styleAttributeValue = document.documentElement.getAttribute("style");
    const styleDeclarations = styleAttributeValue.split(";");
    styleDeclarations.pop();
    let colors = [];
    styleDeclarations.forEach((declaration) => {
      const [property] = declaration.trim().split(":");
      colors.push(property);
    });
    const copiedColors = webColors.slice();
    copiedColors[index] = e.target.value;
    setWebColors(copiedColors);
    document.documentElement.style.setProperty(colors[index], e.target.value);
    dispatch(updateAll.updateTemplate({ section: "colors", variable: null, value: e.target.value, i: index, blockName: templateColors }));
    // document.documentElement.style.setProperty(`--website-${targetTemplate.templateInfo.id}-color${index + 1}`, e.target.value);
  };

  const generatePlate = (e) => {
    const styleAttributeValue = document.documentElement.getAttribute("style");
    const styleDeclarations = styleAttributeValue.split(";");
    styleDeclarations.pop();
    let colors = [];
    styleDeclarations.forEach((declaration) => {
      const [property] = declaration.trim().split(":");
      colors.push(property);
    });

    // const colorScale = chroma.scale([e.target.value, "white"]).mode("lab").colors(colors.length);
    const inputHSL = chroma(e.target.value).hsl();
    const hue = inputHSL[0];
    const saturation = inputHSL[1];
    const lightness = inputHSL[2];

    // Generate related colors with harmonious relationships
    const colorScale = [];
    for (let i = 0; i < colors.length; i++) {
      const newHue = (hue + i * 60) % 360; // Adjusting hue in steps of 60 degrees
      const newColor = chroma.hsl(newHue, saturation, lightness).hex();
      colorScale.push(newColor);
    }
    setWebColors(colorScale);

    colorScale.forEach((color, i) => {
      document.documentElement.style.setProperty(colors[i], color);
      dispatch(updateAll.updateTemplate({ section: "colors", variable: null, value: color, i: i, blockName: templateColors }));
    });
    // document.documentElement.style.setProperty(colors[index], e.target.value);
    // document.documentElement.style.setProperty(`--website-${targetTemplate.templateInfo.id}-color${index + 1}`, e.target.value);
  };

  return (
    <div className="controller">
      <div className="flex-between cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">colors</h3>
        {open ? <img src="/assets/icons/down.svg" width={18} alt="down" /> : <img src="/assets/icons/up.svg" width={18} alt="down" />}
      </div>
      {open && (
        <div className="px-2">
          <div className="flex-between mb-3 pb-1 border-b border-blue-200">
            <div className="flex-between" style={{ marginTop: "0" }}>
              <p className=" text-black font-semibold cursor-pointer" onClick={() => document.getElementById("colorInput").click()}>Palette </p>
              <input type="color"  id="colorInput" onChange={(e) => generatePlate(e)} style={{ display: "none" }} />
              <img src={db} width={20} height={20} alt="Color Picker" className="cursor-pointer" onClick={() => document.getElementById("colorInput").click()} />
            </div>
            <div className="flex-center">
              {webColors.map((c, i) => (
                <div key={i} className="w-6 h-6" style={{ background: c }}></div>
              ))}
            </div>
          </div>

          {colors[templateColors].map((color, index) => {
            return (
              <div key={index} className="flex-between" style={{ marginTop: "0" }}>
                <p className=" text-black font-semibold">Color-{index + 1}</p>
                <ColorPicker color={color} handleChange={(e) => handleChange(e, index)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColorController;

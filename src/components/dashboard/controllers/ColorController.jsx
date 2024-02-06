import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateAll } from "../../../features/templateData/templateSlice";

import ColorPicker from "./ColorPicker";
const ColorController = ({colors , updateAll}) => {
  const [open, setOpen] = useState(false);
  // const { colors } = useSelector((state) => state.template);
  const templateColors = Object.keys(colors)[0];
  const dispatch = useDispatch();
  const handleChange = (e, index) => {
    document.documentElement.style.setProperty(`--website-color-${index + 1}`, e.target.value);
    dispatch(updateAll({ section: "colors", variable: null, value: e.target.value, i: index, blockName: templateColors }));
  };

  return (
    <div className="controller">
      <div className="flex-between cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">colors</h3>
        {open ? <img src="/assets/icons/down.svg" width={18} alt="down" /> : <img src="/assets/icons/up.svg" width={18} alt="down" />}
      </div>
      {open && (
        <div className="px-2">
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

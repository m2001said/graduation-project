import React from "react";

const ColorPicker = ({ color, handleChange }) => {
  return (
    <div className="flex-center border rounded-sm" style={{ padding: "2px" }}>
      <input type="color" value={color} onChange={handleChange} className="dashboard-color-picker" />
      <input
        type="text"
        onChange={handleChange}
        value={color}
        style={{ maxWidth: "80px", height: "19px", outline: "none", color: "black", textTransform: "uppercase", fontWeight: "600" }}
      />
    </div>
  );
};

export default ColorPicker;

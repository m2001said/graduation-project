import React from "react";

const ColorPicker = ({ color, handleChange }) => {
  return (
    <div className="flex-center border rounded-sm" style={{ padding: "2px" }}>
      <input type="text" value={color} style={{color:'black' , padding:'4px'}} onChange={handleChange} className="dashboard-color-picker" />
    </div>
  );
};

export default ColorPicker;

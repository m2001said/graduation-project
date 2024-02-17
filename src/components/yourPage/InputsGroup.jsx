import React from "react";

const InputsGroup = ({ data, selectedIndex, handleIndexChange }) => {
  return (
    <div>
    <input
      type="radio"
      id={data.name}
      name={data.type}
      value={data.id}
      checked={selectedIndex === data.id}
      onChange={(e) => handleIndexChange(e)}
    />
    <label htmlFor={data.name}>
      <img src={data.image} alt={`${data.type} Section ${data.id}`} />
    </label>
  </div>
  );
};

export default InputsGroup;
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
      <div className="check-icon">
        <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg" 
        alt="check-icon" />
      </div>
      <img src={data.image} alt={`${data.type} Section ${data.id}`} />
    </label>
  </div>
  );
};

export default InputsGroup;
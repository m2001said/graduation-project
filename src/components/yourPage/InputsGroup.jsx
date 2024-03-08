// InputsGroup.jsx
import React from "react";

const InputsGroup = ({ data, handleIndexChange }) => {
  return (
    <div >
      <input
        type="radio"
        id={data.name}
        name={data.type}
        value={data.id}
        onChange={handleIndexChange}
      />
      <label htmlFor={data.name} className={`${data.type}--section-poster-container `}>
        <div className="check-icon">
          <img
            src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg"
            alt="check-icon"
          />
        </div>
        <img src={data.image} alt={`${data.type} Section ${data.id}`} className={`${data.type}--section-poster `} />
      </label>
    </div>
  );
};

export default InputsGroup;

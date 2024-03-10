import React, { useState, useEffect } from "react";

const InputOption = ({ item, section, handleIndexChange, selectedIndex }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Update selected option when selectedIndex changes
    setSelectedOption(selectedIndex);
  }, [selectedIndex]);

  const handleOptionChange = (e) => {
    const { value } = e.target;
    const intValue = parseInt(value, 10);

    // Toggle selection when clicked again
    setSelectedOption((prevSelected) => (prevSelected === intValue ? null : intValue));

    // Pass the change to the parent component's function
    handleIndexChange(section)(e);
  };

  return (
    item.map((data) => (
      <div key={data.id}>
        <input
          type="radio"
          id={data.name}
          name={data.type}
          value={data.id}
          checked={selectedOption === data.id}
          onChange={handleOptionChange}
        />
        <label htmlFor={data.name} className={`${data.type}--section-poster-container `}>
          <div className="check-icon">
            <img
              src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg"
              alt="check-icon"
            />
          </div>
          <img src={data.image} alt={`${data.type} Section ${data.id}`} className={`${data.type}--section-poster`} />
        </label>
      </div>
    ))
  );
};

export default InputOption;

import React, { useState } from "react";
import "./chooseOption.css";


const InputOption = ({ item, section, handleIndexChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (id) => {
    // Toggle selection when clicked again
    setSelectedOption(prevSelected => prevSelected === id ? null : id);

    // change section, id
    handleIndexChange(section, id);
  };

  return (

    <div className="group">
      {item.map((data) => (
        <div key={data.id}>
          <div
            className={`section--poster-container ${data.type}--section ${selectedOption === data.id ? 'selected' : ''} cursor-pointer`}
            onClick={() => handleOptionChange(data.id)}
          >
            {selectedOption === data.id && (
            <div className="check-icon">
              <img
                src="https://res.cloudinary.com/duc04fwdb/image/upload/v1708037268/jammal_photos/nme9bdbxqehtul4yzmd7.svg"
                alt="check-icon"
              />
            </div>
          )} 
            <img src={data.image} alt={`${data.type} Section ${data.id}`} className="section-poster" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputOption;

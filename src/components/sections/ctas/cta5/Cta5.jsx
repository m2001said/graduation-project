import React,{useEffect} from 'react';
import "./cta5.css";


const Cta5 = ({ template }) => {
  const cta = template.cta;

  return (
    <div className="cta5">
      <div className="cta5-mainSection">
        <h2>{cta.title}</h2>
        <div className="cta5-input">
          <input type="text" placeholder={cta.inputPlaceholder} />
          <button className="input-btn">{cta.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Cta5

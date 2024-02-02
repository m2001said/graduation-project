import React,{useEffect} from 'react';
import { useSelector } from "react-redux";
import "./cta5.css";

import Aos from 'aos'
import "aos/dist/aos.css"

const Cta5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const { cta5 } = useSelector((state) => state.template5);

  return (
    <div className="cta5">
      <div data-aos="fade-up" data-aos-duration="2500" className="cta5-mainSection">
        <h2>{cta5.title}</h2>
        <div className="cta5-input">
          <input type="text" placeholder={cta5.inputPlaceholder} />
          <button className="input-btn">{cta5.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Cta5
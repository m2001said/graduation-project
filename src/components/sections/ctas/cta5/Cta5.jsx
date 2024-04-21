import React,{useEffect} from 'react';
import { useSelector } from "react-redux";
import "./cta5.css";
import { useLocation } from 'react-router';

// import Aos from 'aos'
// import "aos/dist/aos.css"

const Cta5 = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[])

  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template5.cta;
    }
  });
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
}

export default Cta5

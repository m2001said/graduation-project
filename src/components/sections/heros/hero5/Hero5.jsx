import React,{useEffect} from 'react';
import { useSelector } from "react-redux";
import "./hero5.css";

import Aos from 'aos'
import "aos/dist/aos.css"


const Hero5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const { hero } = useSelector((state) => state.template5);
  return (
    <div className="hero5">
      <div className="hero5-mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          {hero.title}
        </h1>
      </div>

      <div data-aos="fade-down" data-aos-duration="2500" className="hero5-imeges">
        <div className="hero5-videoDiv">
          <video src={hero.videoUrl} autoPlay muted loop className="hero5-imeges-video"></video>
        </div>
        <img src={hero.imgUrl} className="hero5-plane-image" alt="" />
      </div>
    </div>
  );
}

export default Hero5
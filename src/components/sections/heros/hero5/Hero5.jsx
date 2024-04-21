import React,{useEffect} from 'react';
import { useSelector } from "react-redux";
import "./hero5.css";
import { useLocation } from 'react-router';

// import Aos from 'aos'
// import "aos/dist/aos.css"


const Hero5 = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[])

  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template5.hero;
    }
  });
  return (
    <div className="hero5 design5">
      <div className="hero5-mainText">
        <h1>{hero.title}</h1>
      </div>
      <div className="hero5-imeges">
        <div className="hero5-videoDiv">
          <video src={hero.videoUrl} autoPlay muted loop className="hero5-imeges-video"></video>
        </div>
        <img src={hero.imgUrl} className="hero5-plane-image" alt="" />
      </div>
    </div>
  );
}

export default Hero5
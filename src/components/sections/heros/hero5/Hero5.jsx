import React,{useEffect} from 'react';
import "./hero5.css";
import video from "../../../../assets/images/images5/heroVideo.mp4"
import airplane from "../../../../assets/images/images5/takeOff.png"

import Aos from 'aos'
import "aos/dist/aos.css"


const Hero5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='hero5'>
      <div className='hero5-mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="hero5-imeges">
        <div className="hero5-videoDiv">
          <video src={video} autoPlay muted loop className='hero5-imeges-video'></video>
        </div>
        <img src={airplane} className='hero5-plane-image' alt=''/>
      </div>
    </div>
  )
}

export default Hero5
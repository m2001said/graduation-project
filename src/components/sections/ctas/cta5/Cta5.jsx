import React,{useEffect} from 'react';
import "./cta5.css";

import Aos from 'aos'
import "aos/dist/aos.css"

const Cta5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
    <div className='cta5'>
      <div data-aos='fade-up' data-aos-duration='2500' className="cta5-mainSection">
        <h2>Subscribe Newletter & get Latest News</h2>
        <div className="cta5-input">
          <input type='text' placeholder='enter your email addres'/>
          <button className='input-btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Cta5

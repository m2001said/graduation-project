import React from 'react'
import Navbar from '../../navbars/navbar1/Navbar'



const Hero = () => {
  return (
    <div >
      <Navbar/>
      <div className="landing">
      <div className="overlay"></div>
      <div className="text">
        <div className="content">
          <h2>
            Let Your Home <br/>
                Be Unique
          </h2>
          <p>
            There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
          </p>
          <button className="landing-btn">Get started </button>
        </div>
      </div>
    </div>

      
    </div>
  )
}

export default Hero


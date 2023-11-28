import React from 'react'
import Navbar from '../../navbars/navbar1/Navbar'
import Photo from '../../../../Assets/Photo.jpg'

const Hero = () => {
  return (
    <div className="page-container">
      <div className="image-container">
        <img src={Photo} alt="Background" className="background-image" />
      </div>
      <div className="overlay">
        <p className="address-text">Your Page Address</p>
      </div>
      {/* Content of your page */}
    </div>
  )
}

export default Hero


import React from 'react'
import Navbar from '../../navbars/navbar1/Navbar'
import Photo from '../../../../Assets/Photo.jpg'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className='Main-hero'> 
            <img alt='imgage of hero' src={Photo}/>
      </div>
    </div>
  )
}

export default Hero
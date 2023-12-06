import React from 'react'
import "./cta1.css"
import Vector from "../../../../assets/images/Vector.svg"
const cta1 = () => {
  return (
    <div className='cta1'>
      
        <h1 >Wanna join the interno?</h1>
        <p>It is a long established fact  will be distracted.</p>
        <button className='cta1-button'>
          <span>Contact With Us</span>
          <img className='cta1-button-img' src={Vector} alt="" /> 
        </button>
    </div>
  )
}

export default cta1
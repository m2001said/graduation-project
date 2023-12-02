import React from 'react'
import Cards from './cards/pricing-cards.jsx'
import "./Pricing1.css"

const pricing1 = () => {
  return (
   <div className="pricing-container">
    <div>
    <h1 className='head'>Pricing & Plan</h1>
    <p>Home / Priceing</p>
    </div>
    <Cards />
   </div> 
   
  )
}

export default pricing1
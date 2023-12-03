import React from 'react'
import Cards from './cards/pricing-cards.jsx'
import "./pricing1.css"

const pricing1 = () => {
  return (
   <div className="pricing-container">
    <div className='head'>
    <h1 >Pricing & Plan</h1>
    <p>Home / Priceing</p>
    </div>
    <Cards />
   </div> 
  )
}

export default pricing1
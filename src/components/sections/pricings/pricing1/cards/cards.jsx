import React from 'react'
import "./cards.css"
const Cards = () => {
  return (
    <div className="card-container">
      <div className="card">
         <h3>Design advices</h3>
         <h1>29$</h1>
         <span>/Month</span>
         <p>General living space advices</p>
         <p>Rennovation advices</p>
         <p>Interior design advices</p>
         <p>Furniture reorganization</p>
         <p>Up to 5 hours meetings</p>
         <button className='button1'> Get started </button>
      </div>
      <div className="card">
      <h3>Complete interior</h3>
         <h1 id='price2'>39$</h1>
         <span>/Month</span>
         <p id="para2">Most Popular Plans</p>
         <p>Complete home redesign</p>
         <p>Interior and exterior works</p>
         <p>Kitchen design</p>
         <p>Garages organization</p>
         <button className='button2'> Get started </button>
      </div>
      <div className="card">
      <h3>Furniture design</h3>
         <h1>59$</h1>
         <span>/Month</span>
         <p>Furniture for living room</p>
         <p>Furniture refurbishment</p>
         <p>Sofas and amchairs</p>
         <p>Tables and chairs</p>
         <p>Kitchens</p>
         <button className='button3'> Get started </button>
      </div>
    </div>
  );
}

export default Cards;
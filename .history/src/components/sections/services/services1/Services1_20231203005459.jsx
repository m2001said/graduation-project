import React from 'react'
import './services1.css'
import Groupwork from '../../../../images/Groupwork.svg';
import Iocn from '../../../../images/Iocn.svg';
import Vector from '../../../../images/Vector.svg';

const Services = () => {
  return (
    <div className="services">
    <div className="container">
      <div className="services-container">
        <div className="srv-box">
          <div className="text">
          <img src={Vector} alt="image of Groupwork" />
            <h3>Project plan</h3>
            <p>
              There are many variations of the <br/> passages of lorem Ipsum from <br/>
              available, majority
              
            </p>
          </div>
        </div>
        <div className="srv-box">
          <div className="text">
          <img src={Groupwork} alt="image of Groupwork" />
            <h3>Interior work</h3>
            <p>
              There are many variations of the <br/> passages of lorem Ipsum from <br/>
              available, majority
            
            </p>
          </div>
        </div>
        <div className="srv-box">
            <img src={Iocn} alt="image of Groupwork" />
          <div className="text">
            <h3>Relization</h3>
            <p>
              There are many variations of the <br/> passages of lorem Ipsum from <br/>
              available, majority
           
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Services
import React from 'react';
import "./feature3.css";
import nike from "../../../../assets/images/images3/nike.png";
import tick from "../../../../assets/images/images3/tick.png";
import nb from "../../../../assets/images/images3/nb.png";
import adidas from "../../../../assets/images/images3/adidas.png";
import image1 from "../../../../assets/images/images3/image1.png";
import image2 from "../../../../assets/images/images3/image2.png";
import image3 from "../../../../assets/images/images3/image3.png";
import image4 from "../../../../assets/images/images3/image4.png";
const Feature3 = () => {
  return (
    <div className='Reasons3' id="reasons3">
        <div className='left-r3'>
            <img src={image1} alt=''/>
            <img src={image2} alt=''/>
            <img src={image3} alt=''/>
            <img src={image4} alt=''/>   
        </div>
        <div className='right-r3'>
           <span>some reasons</span>
           <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
           </div>
           <div className='details-r3'>
                <div>
                    <img src={tick} alt=''/>
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span style={{color:"#808080",
             fontWeight:"normal"}}>OUR PPARTNERS</span>
            <div className='partners3'>
                <img src={nb} alt=''/>
                <img src={adidas} alt=''/>
                <img src={nike} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Feature3
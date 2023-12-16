import React from 'react'
import "./footer3.css";
import Githup from "../../../../assets/images/images3/github.png";
import Instagram from "../../../../assets/images/images3/instagram.png";
import LinkedIn from "../../../../assets/images/images3/linkedin.png";
import Logo from "../../../../assets/images/images3/logo.png";
const Footer3 = () => {
  return (
    <div className='footer3-container'>
        <hr/>
        <div className='footer3'>
            <div className='scoil-links-f3'>
              <img src={Githup}alt=""/>
              <img src={Instagram}alt=""/>
              <img src={LinkedIn}alt=""/>
              </div>

              <div className='logo-f3'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer3
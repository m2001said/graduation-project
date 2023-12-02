import React from 'react'
import logo from "../../../../assets/images/footer-logo.jpg"
import FaceBook from "../../../../assets/images/facebook.jpg"
import Twitter from "../../../../assets/images/x.jpg"
import LinkedIn from "../../../../assets/images/ln.jpg"
import Inestagram from "../../../../assets/images/instagram.jpg"
import "./footer1.css"


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-icons">
            <h1><img src={logo} alt="" className='img' /> Interno </h1>
            <p>It is a long established fact that a reader will be distracted lookings.</p>
          <div className='media-icon'>
            <a href=' '><img src={FaceBook} alt="" className='img' /></a> 
            <a href=' '><img src={Twitter} alt="" className='img'/></a>
            <a href=' '><img src={LinkedIn} alt="" className='img'/></a>
            <a href=' '><img src={Inestagram} alt="" className='img'/></a>
          </div>
        </div>
        <div className='footerSections'>
         <div className="footer-section">
            <h4>Sections</h4>
            <a href=' '><p>About Us</p></a>
            <a href=' '><p>Our Projects</p></a>
            <a href=' '><p>Our Team</p></a>
            <a href=' '><p>Contact Us</p></a>
            <a href=' '><p>Services</p></a>
              
         </div>
         <div className="footer-services">
            <h4>Services</h4>
            <p>Kitchan</p>
            <p>Living Area</p>
            <p>Bathroom</p>
            <p>Dinning Hall</p>
            <p>Bedroom</p>
         </div>
         <div className="footer-contact">
            <h4>Contact</h4>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p>contact@interno.com</p>
            <p>(123) 456 - 7890</p> 
         </div>
        </div>
    </div>
    
  )
}

export default Footer
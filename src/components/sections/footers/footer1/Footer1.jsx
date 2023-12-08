import React from 'react'
import "./footer1.css"
import { useSelector } from 'react-redux'


const Footer = () => {
  const {footer} = useSelector((state) => state.template );
  return (
    <div className='footer1'>
        <div className="footer1-icons">
            <a href=' #'><img src={footer.logo} alt=""/></a>
            <p>{footer.description}</p>
          <div className='footer1-media-icon'>
          {footer.mediaIcons.map((icon, index) => (
            <a href={"# "} key={index}><img src={icon.mediaIcons} alt="" className='footer1-img' /></a>
          ))} 
          </div>
        </div>
        <div className='footer1-Sections'>
         <div className="footer1-section">
            <h4>Sections</h4>
            <p>About Us</p>
            <p>Our Projects</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Services</p>
              
         </div>
         <div className="footer1-services">
            <h4>Services</h4>
            {footer.blocks.map((service, index) => (
            <p  key={index}>{service.services}</p>
          ))}
         </div>
         <div className="footer1-contact">
            <h4>Contact</h4>
            <p>{footer.location}</p>
            <p>{footer.email}</p>
            <p>{footer.phone}</p>
         </div>
        </div>
    </div>
    
  )
}

export default Footer
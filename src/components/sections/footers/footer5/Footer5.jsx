import React,{useEffect} from 'react';
import "./footer5.css";
import { useSelector } from "react-redux";

import Aos from 'aos'
import "aos/dist/aos.css"

const Footer5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const { footer } = useSelector((state) => state.template5);

  return (
    <div className="footer5">
      <div className="footer5-mainSection design5-container design5-grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="footer5-gridOne">
          <div className="gridOne-logeDiv">
            <img src={footer.imgUrl} className="footer5-logo" alt="" />
          </div>
          <p>{footer.description}</p>
          <div className="socialIcon design5-flex">
            {footer.mediaIcons.map((icon) => (
              <a href={icon.url} key={icon.url}>
                <img src={icon.icon} alt="" className="footer5-singleIcon" />
              </a>
            ))}
          </div>
        </div>

        {footer.items.map((item) => (
          <div div data-aos="fade-up" data-aos-duration="2500" className="footer5-links" key={item.title}>
            <span className="link-title">{item.title}</span>

            {item.links.map((link) => (
              <a href=" " key={link}>
                <li className="footer5-links-element">{link}</li>
              </a>
            ))}
          </div>
        ))}

        
      </div>
    </div>
  );
}

export default Footer5
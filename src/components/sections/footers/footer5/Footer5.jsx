import React,{useEffect} from 'react';
import "./footer5.css";
import { useSelector } from "react-redux";
import Logo from "../../../../assets/images/images5/logo.jpg";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import Aos from 'aos'
import "aos/dist/aos.css"

const Footer5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const { footer5 } = useSelector((state) => state.template5);

  return (
    <div className="footer5">
      <div className="footer5-mainSection design5-container design5-grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="footer5-gridOne">
          <div className="gridOne-logeDiv">
            <img src={footer5.imgUrl} className="footer5-logo" alt="" />
          </div>
          <p>{footer5.description}</p>
          <div className="socialIcon design5-flex">
            {footer5.mediaIcons.map((icon) => (
              <a href={icon.url} key={icon.url}>
                <img src={icon.icon} alt="" className="footer5-singleIcon" />
              </a>
            ))}
          </div>
        </div>

        {footer5.items.map((item) => (
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
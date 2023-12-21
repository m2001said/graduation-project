import React,{useState} from 'react';
import { useSelector } from "react-redux";
import "./navbar5.css";

const Navbar5 = () => {
 const { navbar5 } = useSelector((state) => state.template5);

 const[active, setActive]= useState('navbarMenu')
 const showNavbar =()=>{
  setActive('navbarMenu showNavbar')
 }
 const removeNavbar =()=>{
  setActive('navbarMenu')
 }

 const [noBg, addBg]=useState('navbar5-two')

 const addBgColor= ()=>{
  if(window.scrollY >=10){
    addBg('navbar5-two navbar-with_Bg')
  }else{
    addBg('navbar5-two')
  }
 }
 window.addEventListener('scroll',addBgColor)

  return (
    <div className="navbar5">
      <div className="navbar5-one">
        <div>
          <a href=" #">
            <img src={navbar5.navIcon} alt="" className="navbar5-one-icon" />
          </a>
        </div>

        <div className="navbar5-one-list">
          <li className="navbar5-one-list-icon">
            <a href=" #">
              <img src={navbar5.supportIcon} alt="" className="navbar5-one-icon" />
            </a>
            {navbar5.supporttTxt}
          </li>
          <li className="navbar5-one-list-icon">
            <a href=" #">
              <img src={navbar5.LanguageIcon} alt="" className="navbar5-one-icon" />
            </a>
            {navbar5.LanguageTxt}
          </li>
        </div>

        <div className="navbar5-one-atb">
          <span> {navbar5.singInTxt}</span>
          <span> {navbar5.singOutTxt}</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="navbar5-logoDiv">
          <a href=" #">
            <img src={navbar5.imgUrl} alt="" className="navbar5-logo" />
          </a>
        </div>
        <div className={active}>
          <ul className="navbarMenu-list">
            {navbar5.links.map((link, index) => (
              <li key={index} className="navbarMenu-listItem">
                <a href={`#${link}`} onClick={() => removeNavbar()}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={removeNavbar} className="navbarMenu-btnOne">
            {navbar5.buttonTxt}
          </button>
        </div>

        <div className="toggleIcon" onClick={showNavbar}>
          <a href=" #">
            <img src={navbar5.menuIcon} alt="" className="navbar5-two-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar5
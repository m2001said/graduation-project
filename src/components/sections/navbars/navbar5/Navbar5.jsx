import React,{useState} from 'react';
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import Logo from "../../../../assets/images/images5/logo.jpg";
import "./navbar5.css";

const Navbar5 = () => {
 
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
    <div className='navbar5'>
      <div className='navbar5-one'>
        <div>
        <SiConsul className='navbar5-one-icon'/>
        </div>

        <div className='navbar5-one-list'>
          <li className='navbar5-one-list-icon'><BsPhoneVibrate className='navbar5-one-icon'/>Support</li>
          <li className='navbar5-one-list-icon'> <AiOutlineGlobal className='navbar5-one-icon'/>Languages</li>
        </div>

        <div className='navbar5-one-atb'>
          <span> Sing In</span>
          <span> Sing Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className='navbar5-logoDiv'>
          <img src={Logo} alt='' className='navbar5-logo' />
        </div>
        <div className={active}>
          <ul className='navbarMenu-list'>
            <li onClick={removeNavbar} className='navbarMenu-listItem'>Home</li>
            <li onClick={removeNavbar} className='navbarMenu-listItem'>About</li>
            <li onClick={removeNavbar} className='navbarMenu-listItem'>Offers</li>
            <li onClick={removeNavbar} className='navbarMenu-listItem'>Seats</li>
            <li onClick={removeNavbar} className='navbarMenu-listItem'>Destiations</li>
          </ul>

          <button onClick={removeNavbar} className='navbarMenu-btnOne'>
            contact
          </button>
        </div>

         {/* <button className='navbar5-two-btn'>
            contact
          </button> */}

          <div className='toggleIcon' onClick={showNavbar}>
          <CgMenuGridO className='navbar5-two-icon'/>
          </div>

      </div>
    </div>
  )
}

export default Navbar5
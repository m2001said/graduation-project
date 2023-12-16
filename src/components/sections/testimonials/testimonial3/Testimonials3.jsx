import React, { useState } from 'react';
import "./testimonials3.css";
import {testimonialsData} from "../../projects/project3/data/testimonialsData";
import leftArrow from "../../../../assets/images/images3/leftArrow.png";
import rightArrow from "../../../../assets/images/images3/rightArrow.png";
import {motion} from "framer-motion";
const Testimonials3 = () => {
  const transition = {type:'spring' , duration:3}
  const[selected , setselected]=useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className='testimonials3'>
      <div className='left-t3'>
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
         key={selected}
         initial={{opacity:0 , x:100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}
         transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{color:"var(--orange)"}}>
            {testimonialsData[selected].name}
          </span>{" "}
           - {testimonialsData[selected].status}
        </span>
      </div>



      <div className='right-t3'>
        <motion.div
        initial={{opacity:0, x: -100}}
        whileInView={{opacity:1 , x:0}}
        transition={{...transition , duration:2}}
        ></motion.div>
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1 , x:0}}
        transition={{...transition , duration:2}}
        
        ></motion.div>
        
        <motion.img 
        key={selected}
        initial={{opacity:0 , x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
      
        src={testimonialsData[selected].image} alt=''/>
        <div className='t3-arrows'>
          <img
          onClick={()=>{
            selected === 0
            ? setselected(tLength - 1)
            :setselected((prev)=> prev - 1);
          }}
          src={leftArrow} alt=''/>
          <img
          onClick={()=>{
            selected === tLength - 1
            ? setselected(0)
            :setselected((prev)=> prev + 1);
          }}
          src={rightArrow} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials3
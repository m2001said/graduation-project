import React from 'react'
import "./project3.css";
import {programsData} from "../project3/data/programsData";
import RightArrow from "../../../../assets/images/images3/rightArrow.png";
const Project3 = () => {
  return (
    <div className='Project3' id='project3'>
        <div className='Project3-header'>
            <span className='stroke-text'>Explore our</span>
            <span> Programs</span>
            <span className='stroke-text'>to shape you </span>
        </div>

        <div className='project3-categories'>
            {programsData.map((program)=>(
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>join Now</span>
                            <img src={RightArrow} alt=''/>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Project3
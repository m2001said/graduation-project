import React,{useEffect} from 'react';
import "./teams5.css";
import paris from "../../../../assets/images/images5/paris.jpg"
import dubia from "../../../../assets/images/images5/dubia.jpg"
import newyork from "../../../../assets/images/images5/newYork.jpg"
import travel1 from "../../../../assets/images/images5/user1.jpg"

import Aos from 'aos'
import "aos/dist/aos.css"

const travelers=[
  {
    id:1,
    destinationImage:paris,
    travelerImage:travel1,
    travelerName:"IsraTech",
    sociallink:'@Isratech',
  },
  {
    id:2,
    destinationImage:dubia,
    travelerImage:travel1,
    travelerName:"IsraTech",
    sociallink:'@Isratech',
  },
  {
    id:3,
    destinationImage:newyork,
    travelerImage:travel1,
    travelerName:"IsraTech",
    sociallink:'@Isratech',
  },
  {
    id:1,
    destinationImage:paris,
    travelerImage:travel1,
    travelerName:"IsraTech",
    sociallink:'@Isratech',
  },
]


const Teams5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='teams5 container section'>
      <div className="teams5-mainSectiom">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

        <div className="teams5-travelersCards">

        
          {
           travelers.map(({id, destinationImage, travelerImage, travelerName, sociallink})=>{
            return(
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="teams5-single-card">

              <img src={destinationImage} className='destinationImage' alt=''/>
  
              <div className="cardDetails">
                <img src={travelerImage} className='travelerImage' alt=''/>
              </div>
              <div className="travelerName">
                <span>{travelerName}</span>
                <p>{sociallink}</p>
              </div>
            </div>
            )
           }) 
          }

        </div>
      </div>
    </div>
  )
}

export default Teams5
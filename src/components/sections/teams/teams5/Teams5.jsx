import React,{useEffect} from 'react';
import "./teams5.css";
import { useSelector } from "react-redux";

// import Aos from 'aos'
// import "aos/dist/aos.css"



const Teams5 = () => {

  // useEffect(()=>{
  //   Aos.init({duration: 2000})
  // },[])


  const { team } = useSelector((state) => state.template5);

  return (
    <div className="teams5 design5-container design5-section">
      <div className="teams5-mainSectiom">
        <h2>
          {team.title}
        </h2>

        <div className="teams5-travelersCards">
          {team.cards.map((Card, index) => (
            <div key={index} className="teams5-single-card">
              <img src={Card.destinationImage} className="destinationImage" alt="" />

              <div className="cardDetails">
                <img src={Card.travelerImage} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>{Card.travelerName}</span>
                <p>{Card.sociallink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams5
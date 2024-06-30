import React,{useEffect} from 'react';
import "./teams5.css";




const Teams5 = ({template}) => {
   const team = template.team;



  return (
    <div className="teams5 design5 design5-container design5-section">
      <div className="teams5-mainSectiom">
        <h2>{team.title}</h2>

        <div className="teams5-travelersCards">
          {team.members.map((Card, index) => (
            <div key={index} className="teams5-single-card">
              <img src={Card.destinationImage} className="destinationImage" alt="" />

              <div className="cardDetails">
                <img src={Card.travelerImage} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>{Card.name}</span>
                <p>{Card.socialLink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams5
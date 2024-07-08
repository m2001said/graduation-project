import React from 'react';
import "./teams5.css";
import { useSelector } from 'react-redux';




const Teams5 = ({template}) => {
  const ownTeam= useSelector((state) => state.ownTemplate.team);
  const team = template ? template.team : ownTeam;


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
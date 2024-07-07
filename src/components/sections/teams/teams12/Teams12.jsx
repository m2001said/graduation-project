import React from "react";
import "./teams.css";
import { useSelector } from "react-redux";

const Teams12 = ({ template }) => {
  const ownTeam= useSelector((state) => state.ownTemplate.team);
  const team = template ? template.team : ownTeam;  
  return (
    <div className="container12">
      <h2 className="title12 section__title16">{team.title}</h2>
      <div className="campus12">
        <div className="gallery12">
          {team.members.map((member, index) => (
            <img key={index} src={member.imgUrl} alt={`gallery-img-${index}`} />
          ))}
        </div>
        <button className="btn12 dark-btn12">
          {team.buttonText} <img src={team.icon} alt="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default Teams12;

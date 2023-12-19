import React, { useState } from "react";
import "./teams1.css";
import { useSelector } from "react-redux";

const Teams1 = () => {
  const { team } = useSelector((state) => state.template);
  console.log(team.cards[0].location);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member.name === selectedMember?.name ? null : member);
  };
  return (
    <div className="team1 design-1">
      <h1 className="team1-head">{team.title}</h1>
      <div className="team1-Card">
        <div className="team1-Card-main">
          {team.cards.map((member, index) => (
            <div className="team1-Card-main-show" key={index} onClick={() => handleCardClick(member)}>
              <img className="team1-Card-main-img" src={member.imgUrl} alt={member.name} />
              {selectedMember && selectedMember.name === member.name && (
                <div className="team1-Card-main-info slideUp">
                  <h1>{selectedMember.name}</h1>
                  <h4>{selectedMember.location}</h4>
                  {team.cards.map((icon, index) => (
                    <a href={" #"} key={index} className="team-media-icon">
                      <span>
                      <img src={icon.mediaIcons} alt="" />
                      </span>
                    </a>
                  ))}
                  <h4>{selectedMember.email}</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams1;

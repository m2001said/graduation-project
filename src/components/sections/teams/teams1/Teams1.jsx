import React, { useState } from "react";
import './teams1.css'
import { useSelector } from "react-redux";

const Teams1 = () => {
  const { team } = useSelector(state => state.template);
   
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member,index) => {
    // const id ={index};
    setSelectedMember(member.index === selectedMember?.index ? null : member);
  };

  return (
    <div className="team1" >
      <h1 className="team1-head">{team.title}</h1>
      <div className="team1-Card">
        <div className="team1-Card-main">
          {team.cards.map((member,index) => {
            return (
              <div className="team1-Card-main-show" key={member.index} onClick={() => handleCardClick(member)}>
                <img className="team1-Card-main-img" src={member.imgUrl} alt={member.name} />
                {selectedMember && selectedMember.index === member.index && (
                  <div className="team1-Card-main-info slideUp">
                    <h1>{selectedMember.name}</h1>
                    <h4>{selectedMember.location}</h4>
                    <a href={"#"}>
                      <img src={member.mediaIcons} alt="media" />
                    </a>
                    <h4>{selectedMember.email}</h4>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams1;

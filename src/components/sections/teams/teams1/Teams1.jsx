import React, { useState } from "react";
import "./teams1.css";
import { useSelector } from "react-redux";
import Items1 from "../../items/items1/Items1";
const Teams1 = ({ template }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const ownTeam = useSelector((state) => state.ownTemplate.team);
  const team = template ? template.team : ownTeam;

  const handleCardClick = (member) => {
    setSelectedMember(member === selectedMember ? null : member);
  };
  return (
    <div className="team1 design-1" id={team.sectionId}>
      <h2 className="team1-head">{team.title}</h2>
      <div className="team1-Card">
        <div className="team1-Card-main">
          {team.members.map((member, index) => (
            <div className="team1-Card-main-show" key={index} onClick={() => handleCardClick(member)}>
              <img className="team1-Card-main-img" src={member.imgUrl} alt={member.name} />
              {selectedMember && selectedMember.memberId === member.memberId && (
                <div className="team1-Card-main-info slideUp">
                  <h2>{member.name}</h2>
                  <p>{member.location}</p>
                  <div className="team-media-icon">
                    {member.medias.map((icon) => (
                      <a href={icon.url} key={icon.url} target="_blank" rel="noreferrer">
                        <img src={icon.icon} alt="" style={{ maxWidth: "20px" }} />
                        {/* style={{maxWidth:"20px"}} */}
                      </a>
                    ))}
                  </div>
                  <h4>{member.email}</h4>
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

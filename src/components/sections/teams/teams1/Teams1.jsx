import React, { useState } from "react";
import './teams1.css'
import images from "../../../../assets/images/Card1-img.jpg";

const Teams1 = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John",
      age: "29",
      position: "Developer",
      email: "john@email.com",
      image: images,
    },
    {
      id: 2,
      name: "Jane",
      age: "32",
      position: "Designer",
      email: "jane@email.com",
      image: images,
    },
    {
      id: 3,
      name: "Alex",
      age: "35",
      position: "Marketing",
      email: "alex@email.com",
      image: images,
    },
    {
      id: 4,
      name: "Alex",
      age: "35",
      position: "Marketing",
      email: "alex@email.com",
      image: images,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member.id === selectedMember?.id ? null : member);
  };
  return (
    <div className="team1" >
      <h1 className="team1-head">Our Team Members</h1>
      <div className="team1-Card">
       <div className="team1-Card-main">
        {teamMembers.map((member) => (
          <div className="team1-Card-main-show" key={member.id} onClick={() => handleCardClick(member)}>
            <img  src={member.image} alt={member.name} />
            {selectedMember && selectedMember.id === member.id && (
              <div className="team1-Card-main-info slideUp">
                <h1>{selectedMember.name}</h1>
                <h4>{selectedMember.age}</h4>
                <h4>{selectedMember.position}</h4>
                <h4>{selectedMember.email}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Teams1
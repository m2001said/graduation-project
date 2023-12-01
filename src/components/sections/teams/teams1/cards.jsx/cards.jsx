import React, { useState } from 'react';
import './cards.css'; 
import images from "../../../../../assets/images/Card1-img.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John',
      age:'29',
      position: 'Developer',
      email: "john@email.com"
    },
    {
      id: 2,
      name: 'Jane',
      age:'32',
      position: 'Designer',
      email: "jane@email.com"
    },
    {
      id: 3,
      name: 'Alex',
      age:'35',
      position: 'Marketing',
      email: "alex@email.com"
    }
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="card-container">
      <div className="cards">
        {teamMembers.map((member) => (
          <div className="card" key={member.id} onClick={() => handleCardClick(member)}>
            <img src={images} alt={member.name} />
           
          </div>
        ))}
        {selectedMember && (
        <div className="selected-card">
          <h3>{selectedMember.name}</h3>
          <h4>{selectedMember.age}</h4>
          <h4>{selectedMember.position}</h4>
          <h4>{selectedMember.email}</h4>

        </div>
      )}
      </div>
      
    </div>
  );
};

export default Team;

import React from "react";
import "./team16.css";
import { useSelector } from "react-redux";

const Team16 = ({ template }) => {
  const ownTeam = useSelector((state) => state.ownTemplate.team);
  const team = template ? template.team : ownTeam;
  return (
    <section className="team16 section16" id={team.sectionId}>
      <h2 className="section__title16" data-title="Chefs">
        {team.title}
      </h2>
      <div className="team__grid16 grid16 container16">
        {team.members.map((member, index) => (
          <div className="team__item16" key={index}>
            <img src={member.imgUrl} alt={member.name} className="team__img16" />
            <div className="team__data16">
              <h3 className="team__title16">{member.name}</h3>
              <p className="team__job16">{member.job}</p>
            </div>
            <div className="team__socials16">
              {team.medias.map((social, sIndex) => (
                <a key={sIndex} href={social.url} className="team__social-link16" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team16;

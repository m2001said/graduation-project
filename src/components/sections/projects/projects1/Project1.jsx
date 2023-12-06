import React from "react";
import "./Project1.css";
import project1 from "../../../../assets/images/project1.png";
import project2 from "../../../../assets/images/project2.png";
import project3 from "../../../../assets/images/project3.png";
import project4 from "../../../../assets/images/project4.png";
import Icon from "../../../../assets/images/Icon.svg";

const Project1 = () => {
  let header = {
    headerTitle: "Modern Kitchan",
    headerDescribe: `It is a long established fact that a reader will be distracted by the of 
        readable content of page lookings at its layouts points.`,
  };

  let projectsBox = [
    {
      image: project1,
      icon: Icon,
      title: "Modern Kitchan",
      describe: "Decor / Artchitecture",
      link: "#",
    },
    {
      image: project2,
      icon: Icon,
      title: "Modern Kitchan",
      describe: "Decor / Artchitecture",
      link: "#",
    },
    {
      image: project3,
      icon: Icon,
      title: "Modern Kitchan",
      describe: "Decor / Artchitecture",
      link: "#",
    },
    {
      image: project4,
      icon: Icon,
      title: "Modern Kitchan",
      describe: "Decor / Artchitecture",
      link: "#",
    },
  ];

  return (
    <div className="projects1 design-1">
      <div className="projects1-header">
        <p className="title-1">{header.headerTitle}</p>
        <p className="description-1">{header.headerDescribe}</p>
      </div>
      <div className="projects1-cards">
        {projectsBox.map((data) => (
          <div className="projects1-card">
            <div className="projects1-card-img">
              <img src={data.image} alt="Article 1" />
            </div>
            <div className="projects1-card-info">
              <div className="projects1-card-details">
                <h1>{data.title}</h1>
                <p>{data.describe}</p>
              </div>
              <a href={data.link} className="projects1-card-link">
                <span>
                  <img src={data.icon} alt="icon" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project1;

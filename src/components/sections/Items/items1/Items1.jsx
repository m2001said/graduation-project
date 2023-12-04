import React from "react";
import "./Items1.css";
import article1 from "../../../../assets/images/article1.png";
import article2 from "../../../../assets/images/article2.png";
import article3 from "../../../../assets/images/article3.png";
import Icon from "../../../../assets/images/Icon.svg";

const Articles = () => {
  let header = {
    headerTitle: "Articles & News",
    headerDescribe: `it is a long established fact that a reader will be distracted by the of readable content of 
        a page when lookings at its layouts the points of using.`,
  };

  let articlesBox = [
    {
      image: article1,
      icon: Icon,
      title: "let's get solution for building construction work",
      date: "26 december,2022",
      caption: "kitchan design",
      link: "#",
    },
    {
      image: article2,
      icon: Icon,
      title: "low cost latest invented interior designing ideas.",
      date: "22 december,2022",
      caption: "living design",
      link: "#",
    },
    {
      image: article3,
      icon: Icon,
      title: "Best for any office & business interior solution",
      date: "25 december,2022",
      caption: "interior design",
      link: "#",
    },
  ];

  return (
    <div className="articles">
      {
        <div className="header">
          <h1>{header.headerTitle}</h1>
          <p>{header.headerDescribe}</p>
        </div>
      }
      <div className="container">
        {articlesBox.map((data) => (
          <div className="box article-box " key={data.title}>
            <div className="img">
              <img src={data.image} alt="Article 1" />
              <p className="caption">{data.caption}</p>
            </div>
            <div className="info">
              <h1>{data.title}</h1>
              <div className="article-foot">
                <p>{data.date}</p>
                <a href={data.link} className="go-to">
                  <span>
                    <img src={data.icon} alt="icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

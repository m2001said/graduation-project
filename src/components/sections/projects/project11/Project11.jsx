// import React, { useState } from "react";
// import "../project11/project11.css";

// const Project11 = ({ template }) => {
//   const projects = template.projects;

//   const [cards, setItems] = useState(projects.cards);

//   const filterItem = (categoryItem) => {
//     const updatedItems = categoryItem === "Everything" ? projects.cards : projects.cards.filter((curElem) => curElem.subtitle === categoryItem);
//     setItems(updatedItems);
//   };

//   return (
//     <section className="work11 container section" id="portfolio">
//       <h2 className="section__title11">{projects.title}</h2>
//       <div className="work__filters11">
//         {projects.links.map((link, index) => (
//           <span className="work__item11" key={index} onClick={() => filterItem(link.title)}>
//             {link.title}
//           </span>
//         ))}
//       </div>

//       <div className="work__container11 grid11">
//         {cards.map((elem, index) => {
//           const { imgUrl, title, name } = elem;
//           return (
//             <div className="work__card11" key={index}>
//               <div className="work__thumbnail11">
//                 <img src={imgUrl} alt="" className="work__img11" />
//                 <div className="work__mask11"></div>
//               </div>
//               <span className="work__category11">{name}</span>
//               <h3 className="work__title11">{title}</h3>
//               <a href="#" className="work__button11">
//                 <img src={projects.imgUrl} alt="" className="icon-link-work__button11-icon" />
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Project11;
import React, { useState } from "react";
import "../project11/project11.css";

const Project11 = ({ template }) => {
  const projects = template.projects;

  const [cards, setCards] = useState(projects.projects); // Initialize state with projects.projects

  const filterItem = (categoryItem) => {
    const updatedItems = categoryItem === "Everything" ? projects.projects : projects.projects.filter((curElem) => curElem.category === categoryItem);
    setCards(updatedItems);
  };

  return (
    <section className="work11 container section" id="portfolio">
      <h2 className="section__title11">{projects.title}</h2>
      <div className="work__filters11">
        {projects.categories.map((category, index) => (
          <span className="work__item11" key={index} onClick={() => filterItem(category)}>
            {category}
          </span>
        ))}
      </div>

      <div className="work__container11 grid11">
        {cards.map((project, index) => {
          const { imgUrl, title, category } = project;
          return (
            <div className="work__card11" key={index}>
              <div className="work__thumbnail11">
                <img src={imgUrl} alt="" className="work__img11" />
                <div className="work__mask11"></div>
              </div>
              <span className="work__category11">{category}</span>
              <h3 className="work__title11">{title}</h3>
              <a href="#" className="work__button11">
                <img src={projects.imgUrl} alt="" className="icon-link-work__button11-icon" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project11;

// import React from "react";
// import { useSelector } from "react-redux";

// const ServicesBox11 = () => {
//   const { statistic } = useSelector((state) => state.template11);
//   return (
//     <div className="about___boxes11 grid11">
//       {statistic.statistics.map((stat, index) => (
//         <div key={index} className="about__box11">
//           <img src={stat.imgUrl} alt="" className="about__icon11" />
//           <div>
//             <h3 className="about__title11">{stat.value}</h3>
//             <span className="about__subtitle11">{stat.title}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicesBox11;
import React from "react";
import { useSelector } from "react-redux";

const ServicesBox11 = () => {
  const { statistic } = useSelector((state) => state.template11);
  return (
    <div className="about___boxes11 grid11">
      {statistic.statistics.map((stat, index) => (
        <div key={index} className="about__box11">
          <img src={stat.imgUrl} alt="" className="about__icon11" />
          <div>
            <h3 className="about__title11">{stat.title}</h3>
            <span className="about__subtitle11">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox11;

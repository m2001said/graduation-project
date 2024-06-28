// import React, { useState } from "react";
// import "./testimonials3.css";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";

// const Testimonials3 = () => {
//   // const { testimonial } = useSelector((state) => state.template3);
//   const { pathname } = useLocation();
//   const testimonial = useSelector((state) => {
//     if (pathname.includes("own-page")) {
//       return state.ownTemplate.testimonials;
//     } else {
//       return state.template3.testimonials;
//     }
//   });

//   const [selected, setselected] = useState(0);
//   const tLength = testimonial.testimonials.length;
//   return (
//     <div className="testimonials3" id="Testimonials">
//       <div className="left-t3">
//         <span>{testimonial.title.mainTitle}</span>
//         <span className="stroke-text">{testimonial.title.primaryTitle}</span>
//         <span>{testimonial.title.secondaryTitle}</span>
//         <span>{testimonial.testimonials[selected].review}</span>
//         <span>
//           <span style={{ color: "var(--orange)" }}>{testimonial.testimonials[selected].name}</span>- {testimonial.testimonials[selected].status}
//         </span>
//       </div>

//       <div className="right-t3">
//         <div></div>
//         <div></div>

//         <img key={selected} src={testimonial.testimonials[selected].imgUrl} alt="" />
//         <div className="t3-arrows">
//           <img
//             onClick={() => {
//               selected === 0 ? setselected(tLength - 1) : setselected((prev) => prev - 1);
//             }}
//             src={testimonial.imgUrl[1]}
//             alt=""
//           />
//           <img
//             onClick={() => {
//               selected === tLength - 1 ? setselected(0) : setselected((prev) => prev + 1);
//             }}
//             src={testimonial.imgUrl[0]}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials3;
import React, { useState } from "react";
import "./testimonials3.css";

const Testimonials3 = ({ template }) => {
  const [selected, setSelected] = useState(0);
  const tLength = template.testimonial.testimonials.length;

  return (
    <div className="testimonials3" id="Testimonials">
      <div className="left-t3">
        <span>{template.testimonial.title.mainTitle}</span>
        <span className="stroke-text">{template.testimonial.title.primaryTitle}</span>
        <span>{template.testimonial.title.secondaryTitle}</span>
        <span>{template.testimonial.testimonials[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{template.testimonial.testimonials[selected].name}</span> - {template.testimonial.testimonials[selected].status}
        </span>
      </div>

      <div className="right-t3">
        <div></div>
        <div></div>

        <img key={selected} src={template.testimonial.testimonials[selected].imgUrl} alt="" />
        <div className="t3-arrows">
          <img
            onClick={() => setSelected(selected === 0 ? tLength - 1 : selected - 1)}
            src={template.testimonial.imgUrl[1]}
            alt=""
          />
          <img
            onClick={() => setSelected(selected === tLength - 1 ? 0 : selected + 1)}
            src={template.testimonial.imgUrl[0]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;

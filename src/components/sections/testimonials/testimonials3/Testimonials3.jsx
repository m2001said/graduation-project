// import React, { useState } from "react";
// import "./testimonials3.css";
// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

// const Testimonials3 = () => {
//   const { testimonial3 } = useSelector((state) => state.template3);
//   const transition = { type: "spring", duration: 3 };
//   const [selected, setselected] = useState(0);
//   const tLength = testimonial3.testimonialsData.length;

//   return (
//     <div className="testimonials3">
//       <div className="left-t3">
//         <span>{testimonial3.title[0].Subtitle}</span>
//         <span className="stroke-text">{testimonial3.title[0].titleA}</span>
//         <span>{testimonial3.title[0].titleB}</span>
//         <motion.span key={selected} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={transition}>
//           {testimonial3.testimonialsData[selected].review}
//         </motion.span>
//         <span>
//           <span style={{ color: "var(--orange)" }}>{testimonial3.testimonialsData[selected].name}</span>- {testimonial3.testimonialsData[selected].status}
//         </span>
//       </div>

//       <div className="right-t3">
//         <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ...transition, duration: 2 }}></motion.div>
//         <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ...transition, duration: 2 }}></motion.div>

//         <motion.img
//           key={selected}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={transition}
//           src={testimonial3.testimonialsData[selected].image}
//           alt=""
//         />
//         <div className="t3-arrows">
//           <img
//             onClick={() => {
//               selected === 0 ? setselected(tLength - 1) : setselected((prev) => prev - 1);
//             }}
//             src={testimonial3.imgUrl[0].imgUrl2}
//             alt=""
//           />
//           <img
//             onClick={() => {
//               selected === tLength - 1 ? setselected(0) : setselected((prev) => prev + 1);
//             }}
//             src={testimonial3.imgUrl[0].imgUrl1}
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
import { useSelector } from "react-redux";

const Testimonials3 = () => {
  const { testimonial3 } = useSelector((state) => state.template3);
  const [selected, setselected] = useState(0);
  const tLength = testimonial3.testimonialsData.length;

  return (
    <div className="testimonials3">
      <div className="left-t3">
        <span>{testimonial3.title[0].Subtitle}</span>
        <span className="stroke-text">{testimonial3.title[0].titleA}</span>
        <span>{testimonial3.title[0].titleB}</span>
        <span>{testimonial3.testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{testimonial3.testimonialsData[selected].name}</span>- {testimonial3.testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t3">
        <div></div>
        <div></div>

        <img key={selected} src={testimonial3.testimonialsData[selected].image} alt="" />
        <div className="t3-arrows">
          <img
            onClick={() => {
              selected === 0 ? setselected(tLength - 1) : setselected((prev) => prev - 1);
            }}
            src={testimonial3.imgUrl[0].imgUrl2}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLength - 1 ? setselected(0) : setselected((prev) => prev + 1);
            }}
            src={testimonial3.imgUrl[0].imgUrl1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;

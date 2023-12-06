
import React from "react";
import PhotoImage from "./person1.jpg";
import PhotoImage2 from "./person1.jpg";
import PhotoBackground from "./Background (1).png";
import "./testimonials1.css";

const testimonialData = [
  {
    id: 1,
    name: "Nattasha Mith",
    location: "Sydney, USA",
    image: "./person1.jpg",
    background: "./Background (1).png",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    id: 2,
    name: "Raymond Galario",
    location: "Sydney, Australia",
    image: "./person1.jpg",
    background: "./Background (1).png",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    id: 3,
    name: "Benny Roll",
    location: "Sydney, New York",
    image: "./person1.jpg",
    background: "./Background (1).png",
    content: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
];

const Testimonial = ({ name, location, image, background, content }) => {
  return (
    <div className="testimonial">
      <div className="background" style={{ backgroundImage: `url(${background})` }}>
        <div className="content">
          <div className="details">
            <div className="person">
              <img src={PhotoImage} alt="" />
            </div>
            <h1>
              <b>{name}</b>
              <br />
              {location}
            </h1>
          </div>
          <p className="lorem-ipsum">{content}</p>        </div>
      </div>
    </div>
  );
};

const Testimonials1 = () => {
  return (
    <div className="Testimonials-container">
      <div className="contentt">
        <div className="Testimonials-heading">
          <h1>
            What the People Thinks
            <br /> About Us
          </h1>
        </div>
        <div className="Testimonials">
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;










/***ستاااتيك */

// import React from "react";
// import "./testimonials1.css";
// import PhotoImage from "./person1.jpg";
// import PhotoImage2 from "./person1.jpg";
// import PhotoBackground from "./Background (1).png";

// const Testimonials1 = () => {
//   return (
//     <div className="Testimonials-container">
//       <div className="contentt">
//         <div className="heading">
//           {/*  */}
//           <h1>
//             What the People Thinks
//             <br /> About Us
//           </h1>
//         </div>
//         <div className="Testimonials">
//           <div className="p1">
//             <div className="background1">
//               <div className="content1">
//                 <div className="p1-details">
//                   <div className="person1">
//                     <img src={PhotoBackground} alt="" />
//                     <img src={PhotoImage} alt="" />
//                   </div>
//                   <h1>
//                     <b> Nattasha Mith </b>
//                     <br />
//                     Sydney, USA
//                   </h1>
//                 </div>
//                 <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.</p>{" "}
//               </div>
//             </div>
//           </div>
//           <div className="p2">
//             <div className="background2">
//               <div className="content2">
//                 <div className="p2-details">
//                   <div className="person2">
//                     <img src={PhotoBackground} alt="" />

//                     <img src={PhotoImage} alt="" />
//                   </div>
//                   <h1>
//                     <b> Raymond Galario </b>
//                     <br /> Sydney, Australia
//                   </h1>
//                 </div>
//                 <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.</p>{" "}
//               </div>
//             </div>
//           </div>
//           <div className="p3">
//             <div className="background3">
//               <div className="content3">
//                 <div className="p3-details">
//                   <div className="person3">
//                     <img src={PhotoBackground} alt="" />
//                     <img src={PhotoImage2} alt="" />{" "}
//                   </div>
//                   <h1>
//                     <b> Benny Roll </b>
//                     <br />
//                     Sydney, New York
//                   </h1>
//                 </div>
//                 <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.</p>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials1;


// import { useState } from "react";
// import React from "react";
// import { useSelector } from "react-redux";

// const Testimonials9 = () => {
//   const { testimonialsData } = useSelector((state) => state.template9);
//   const { block9 } = useSelector((state) => state.template9);

//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

//   const handleNextTestimonial = () => {
//     setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrevTestimonial = () => {
//     setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
//   };

//   const currentTestimonial = testimonialsData[currentTestimonialIndex];

//   return (
//     <main className="container mx-auto px-3 lg:flex justify-between pt-20 testimonial-9">
//       <div className="lg:w-1/3 flex flex-col">
//         <p className="text-[va(--primary-text-color-9)] uppercase md:text-xl text-lg">Testimonials</p>
//         <h1 className="lg:text-4xl text-3xl font-medium capitalize py-3">Look What Our Customers Say!</h1>
//         <p className="text-[#a5a5a5] text-sm">{block9.speach}.</p>
//         <div className="lg:flex hidden gap-x-12 mt-16">
//           <button
//             onClick={handlePrevTestimonial}
//             className="w-12 h-12 rounded-full border border-[var(--button-text-color-9)] flex justify-center items-center text-2xl text-[var(--button-text-color-9)] focus:text-[var(--white-9)] hover:text-[var(--white-9)]"
//           >
//             <img src={block9.arrowb} className="cursor-9  " />
//           </button>
//           <button
//             onClick={handleNextTestimonial}
//             className="w-12 h-12 rounded-full border border-[var(--button-text-color-9)] flex justify-center items-center text-2xl text-[var(--button-text-color-9)] focus:text-[var(--white-9)] hover:text-[var(--white-9)]"
//           >
//             <img src={block9.arrowf} className="cursor-9" />
//           </button>
//         </div>
//       </div>

//       <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
//         <img src={block9.qot} className="text-[#ffe999] text-3xl logo-9" />
//         <p className="font-medium pt-2 pb-8">{currentTestimonial.quote}</p>
//         <div className="border-t border-[var(--d4d4d4-9)] flex items-center py-4">
//           <img src={currentTestimonial.imageUrl} alt="" className="rounded-full h-12 w-12 object-cover" />
//           <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
//             <p>{currentTestimonial.author}</p>
//             <div className="flex flex-row">
//               {" "}
//               {[...Array(5)].map((_, index) => (
//                 <button key={index} className="cursor-auto text-[var(--ffe999-9)] last:text-[var(--d4d4d4-9)]">
//                   <img src={block9.star} className="w-6 h-6 mr-1" />
//                 </button>
//               ))}
//             </div>
//           </span>
//         </div>
//         <button className="bg-gradient-to-r from-[var(--button-bg-gradient-from-9)] to-[var(--button-bg-gradient-to-9)] rounded-full h-16 w-16 cursor-auto absolute -top-6 left-6"></button>
//       </div>
//     </main>
//   );
// };

// export default Testimonials9;
// // bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9]

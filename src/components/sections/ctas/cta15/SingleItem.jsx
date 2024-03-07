// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const SingleItem = ({ id, title, description, subtitle, date }) => {
//   const { cta } = useSelector((state) => state.template15);

//   const [expanded, setExpanded] = useState(false);

//   return (
//     <article className="h-full flex-wrap basis-0 flex mb-2 border-0 border-b-2 border-solid border-black relative ">
//       <div className={`${id === 1 ? "border-0" : "accordion-border"} w-full mr-6`}>
//         <p className="flex justify-between relative items-center m-auto w-full pl-6">
//           <span className="items-center text-2xl font-bold py-3 cta_6">{title}</span>
//         </p>
//         {expanded && (
//           <div className="pr-5 pl-3">
//             <span className="flex items-center justify-between">
//               <p className="text-lg font-bold m-0 cta_7">{subtitle}</p>
//               <span className="flex items-center gap-x-1">
//                 <p className="text-sm font-bold m-0 cta_8">{date}</p>
//               </span>
//             </span>
//             <p className=" relative pt-2 pb-5 leading-8 cta_9">{description}</p>
//           </div>
//         )}
//         <span className="absolute z-10 -bottom-6 right-0 rounded-full border-2 border-black shadowbtn" onClick={() => setExpanded(!expanded)}>
//           <button className={`${expanded ? "bg-[#f0ebe3]" : "bg-white"} flex items-center justify-center text-2xl font-bold h-12 w-12 rounded-full`}>
//             {expanded ? <img src={cta.imgUrl[1]} /> : <img src={cta.imgUrl[0]} />}
//           </button>
//         </span>
//       </div>
//     </article>
//   );
// };

// export default SingleItem;
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SingleItem = ({ id, title, description, subtitle, date }) => {
  const { cta } = useSelector((state) => state.template15);

  const [expanded, setExpanded] = useState(false);

  return (
    <article className="h-full flex-wrap basis-0 flex mb-2 border-0 border-b-2 border-solid border-black relative ">
      <div className={`${id === 1 ? "border-0" : "accordion-border"} w-full mr-6`}>
        <p className="flex justify-between relative items-center m-auto w-full pl-6">
          <span className="items-center text-2xl font-bold py-3 cta_6">{title}</span>
        </p>
        {expanded && (
          <div className="pr-5 pl-3">
            <span className="flex items-center justify-between">
              <p className="text-lg font-bold m-0 cta_7">{subtitle}</p>
              <span className="flex items-center gap-x-1">
                <p className="text-sm font-bold m-0 cta_8">{date}</p>
              </span>
            </span>
            <p className=" relative pt-2 pb-5 leading-8 cta_9">{description}</p>
          </div>
        )}
        <span className="absolute z-10 -bottom-6 right-0 rounded-full border-2 border-black shadowbtn" onClick={() => setExpanded(!expanded)}>
          <button className={`${expanded ? "bg-[#f0ebe3]" : "bg-white"} flex items-center justify-center text-2xl font-bold h-12 w-12 rounded-full`}>
            {expanded ? <img src={cta.imgUrl[1]} alt="expand" /> : <img src={cta.imgUrl[0]} alt="collapse" />}
          </button>
        </span>
      </div>
    </article>
  );
};

export default SingleItem;

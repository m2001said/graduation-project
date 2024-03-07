// import React from "react";
// import SingleItem from "./SingleItem";
// import { useSelector } from "react-redux";

// export const Education = () => {
//   const { cta } = useSelector((state) => state.template15);

//   return (
//     <div>
//       {cta.cv
//         .filter((item) => item.category === "education")
//         .map((item) => (
//           <SingleItem key={item.id} {...item} />
//         ))}
//     </div>
//   );
// };

// export const Experience = () => {
//   const { cta } = useSelector((state) => state.template15);

//   return (
//     <div>
//       {cta.cv
//         .filter((item) => item.category === "experience")
//         .map((item) => (
//           <SingleItem key={item.id} {...item} />
//         ))}
//     </div>
//   );
// };
import React from "react";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";

export const Education = () => {
  const { cta } = useSelector((state) => state.template15);

  return (
    <div>
      {cta.items
        .filter((item) => item.category === "education")
        .map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
    </div>
  );
};

export const Experience = () => {
  const { cta } = useSelector((state) => state.template15);

  return (
    <div>
      {cta.items
        .filter((item) => item.category === "experience")
        .map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
    </div>
  );
};


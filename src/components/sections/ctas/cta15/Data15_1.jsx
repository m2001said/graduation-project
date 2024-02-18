import React from "react";
import SingleItem from "./SingleItem";
import { useSelector } from "react-redux";

export const Education = () => {
  const { cta15 } = useSelector((state) => state.template15);

  return (
    <div>
      {cta15[0].cv
        .filter((item) => item.category === "education")
        .map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
    </div>
  );
};

export const Experience = () => {
  const { cta15 } = useSelector((state) => state.template15);

  return (
    <div>
      {cta15[0].cv
        .filter((item) => item.category === "experience")
        .map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import SingleItem from "./SingleItem";
import { useLocation } from "react-router";

export const Education = () => {
  // const { cta } = useSelector((state) => state.template15);
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template15.cta;
    }
  });

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

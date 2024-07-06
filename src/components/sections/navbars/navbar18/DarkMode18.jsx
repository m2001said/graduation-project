import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DarkMode = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        {theme === "dark" ? (
          <img src={navbar.icons[0]} alt="" onClick={() => setTheme("light")} className="" />
        ) : (
          <img src={navbar.icons[1]} alt="" onClick={() => setTheme("dark")} className="" />
        )}
      </div>
    </>
  );
};

export default DarkMode;

import React, { useState } from 'react';
import './navbar1.css';
import Logo from '../../../../images/Logo.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "Pages",
    },
    {
      text: "Services",
    },
    {
      text: "Project",
    },
    {
      text: "Blog",
    },
    {
      text: "Contact",
    },
  ];

  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            {isSmallScreen && (
              <i className="fas fa-bars toggle-menu" onClick={() => setOpenMenu(!openMenu)}></i>
            )}
            <ul>
              {menuOptions.map((item, index) => (
                <li key={index}><a className={index === 0 ? "active" : ""} href="#">{item.text}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isSmallScreen && (
        <div className="navbar-menu-container">
          <i className="fas fa-bars toggle-menu" onClick={() => setOpenMenu(!openMenu)}></i>
        </div>
      )}
      {/* Removed Drawer component and related MUI code */}
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import './navbar1.css';
import Logo from '../../../../images/Logo.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenu && !event.target.closest('.navbar-menu-container')) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openMenu]);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
              <i className="fas fa-bars toggle-menu" onClick={handleToggleMenu}></i>
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
          <i className="fas fa-bars toggle-menu" onClick={handleToggleMenu}></i>
        </div>
      )}
      {isSmallScreen && openMenu && (
        <div className="menu-list">
          <ul>
            {menuOptions.map((item, index) => (
              <li key={index}><a href="#">{item.text}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

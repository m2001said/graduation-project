import React, { useState } from 'react';
import './navbar1.css';
import Logo from '../../../../images/Logo.jpg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = window.innerWidth <= 600;

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

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
            <ul className={isSmallScreen && openMenu ? 'mobile-menu' : 'desktop-menu'}>
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

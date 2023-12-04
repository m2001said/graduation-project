

import Logo from '../../../../images/Logo.jpg';
import React, { useState, useRef, useEffect } from 'react';
import './navbar1.css'; // Import your CSS file

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = window.innerWidth <= 767; // Adjust the breakpoint as needed
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: 'Home',
    },
    {
      text: 'Pages',
    },
    {
      text: 'Services',
    },
    {
      text: 'Project',
    },
    {
      text: 'Blog',
    },
    {
      text: 'Contact',
    },
  ];

  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            {/* Replace with your actual logo */}
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            {isSmallScreen && (
              <div ref={menuRef} className={`toggle-menu ${openMenu ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
            <ul className={isSmallScreen && openMenu ? 'show' : ''}>
              {menuOptions.map((item, index) => (
                <li key={index}>
                  <a className={index === 0 ? 'active' : ''} href="#" onClick={closeMenu}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isSmallScreen && (
        <div className="navbar-menu-container" onClick={toggleMenu}></div>
      )}
      {isSmallScreen && openMenu && (
        <div className="drawer">
          <ul>
            {menuOptions.map((item, index) => (
              <li key={index} onClick={closeMenu}>
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

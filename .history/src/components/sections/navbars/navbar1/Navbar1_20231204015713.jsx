import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../../../../images/Logo.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import './navbar1.css';

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
            {/* Replace with your actual logo */}
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            {isSmallScreen && (
              <div className="toggle-menu  " onClick={() => setOpenMenu(!openMenu)}>
                
              </div>
            )}
            <ul>
              {menuOptions.map((item, index) => (
                <li key={index}>
                  <a className={index === 0 ? "active" : ""} href="#">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isSmallScreen && (
        <div className="navbar-menu-container" onClick={() => setOpenMenu(!openMenu)}>
         
        </div>
      )}
      <Drawer open={isSmallScreen && openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;

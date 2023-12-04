import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'; // Import Material-UI Menu icon
import HomeIcon from '@mui/icons-material/Home'; // Import Material-UI Home icon
import { Email, Phone } from '@mui/icons-material'; // Import other Material-UI icons
import Logo from '../../../../images/Logo.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import './navbar1.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Pages", icon: <Email /> },
    { text: "Services", icon: <Phone /> },
    { text: "Project", icon: <MenuIcon /> },
    { text: "Blog", icon: <MenuIcon /> },
    { text: "Contact", icon: <MenuIcon /> },
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
              <MenuIcon className="toggle-menu" onClick={() => setOpenMenu(!openMenu)} />
            )}
            <ul>
              {menuOptions.map((item, index) => (
                <li key={index}>
                  <a className={index === 0 ? "active" : ""} href="#">
                    {item.icon} {/* Display Material-UI icon */}
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isSmallScreen && (
        <div className="navbar-menu-container">
          <MenuIcon className="toggle-menu" onClick={() => setOpenMenu(!openMenu)} />
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
                  {item.icon} {/* Display Material-UI icon */}
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

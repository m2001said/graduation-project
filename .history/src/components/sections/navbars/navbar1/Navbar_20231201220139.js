import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Logo from '../../../../images/Logo.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import './navbar1.css'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Pages",
      icon: <InfoIcon />,
    },
    {
      text: "Services",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Project",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Blog",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <div  >
      <header>
        <div className="container">
          <a href="#" className="logo">
            {/* Replace with your actual logo */}
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            {isSmallScreen && (
              <i className="fas fa-bars toggle-menu" onClick={() => setOpenMenu(!openMenu)}></i>
            )}
            <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="form">
              <i className="fas fa-search"></i>
            </div>
          </nav>
        </div>
      </header>
      {isSmallScreen && (
        <div className="navbar-menu-container">
          <i className="fas fa-bars toggle-menu" onClick={() => setOpenMenu(!openMenu)}></i>
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
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
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

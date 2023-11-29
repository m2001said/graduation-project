import React from 'react';
import Logo from '../../../../images/Logo.jpg';
import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
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


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
      text: "blog",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <ShoppingCartRoundedIcon />,
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
          <i className="fas fa-bars toggle-menu"></i>
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
          <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
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
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

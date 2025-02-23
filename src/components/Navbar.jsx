import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, Button, useTheme, Menu, MenuItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {Build, Devices, Code, Visibility, Computer } from '@mui/icons-material';
import ThemeToggle from './ThemeToggle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

// Styled NavLink component
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: 'opacity 0.3s ease, backdrop-filter 0.3s ease, color 0.3s ease',
  opacity: 0.6,
  fontWeight: 500,
  padding: '6px 12px',
  borderRadius: '4px',
  '&:hover': {
    opacity: 0.8,
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    opacity: 1,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
    transform: 'scale(1.05)',
  },
}));

// Navigation links and services
const navLinks = [
 
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
];

const services = [
  { name: 'Barcode Solutions', icon: Build, path: '/barcode-solutions', des: 'Get a better understanding of where your traffic is coming from.' },
  { name: 'IT Management', icon: Devices, path: '/it-infrastructure-management', des: 'Speak directly to your customers in a more meaningful way.' },
  { name: 'Software Development', icon: Code, path: '/customized-software-development', des: "Your customers' data will be safe and secure." },
  { name: 'Vision Systems', icon: Visibility, path: '/vision-systems-id-readers', des: "Connect with third-party tools that you're already using." },
  { name: 'Software Services', icon: Computer, path: '/software-development', des: 'Build strategic funnels that will drive your customers to convert.' },
];
const serve = [
  {  name: 'Product Consulting', des: 'Guidance for startup success', icon: BusinessCenterIcon,  path: '/software-development'},
  {  name: 'Product Discovery Phase', des: 'Refine ideas into solutions', icon: LightbulbIcon ,  path: '/software-development' },
  { name: 'Product UI/UX Design', des: 'Designs that captivate users', icon: DesignServicesIcon ,  path: '/software-development' },
  { name: 'MVP Development', des: 'Launch your MVP faster', icon: RocketLaunchIcon ,  path: '/software-development' },
  {  name: 'SaaS Development', des: 'Build scalable SaaS products', icon: CloudIcon  ,  path: '/software-development'},
  { name: 'Software Product Development', des: 'Outsource development needs to experts', icon: CodeIcon,  path: '/software-development' },
  { name: 'Product Development for Startups', des: 'Launch your startup idea with expert guidance', icon: EmojiObjectsIcon,  path: '/software-development' },
  { name: 'CTO as a Service', des: 'Grow faster with strategic tech leadership', icon: LeaderboardIcon,  path: '/software-development' },
];







const Navbar = ({ mode, toggleColorMode }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleClick1 = (event) => setAnchorEl(event.currentTarget);
  const handleClick2 = (event) => setAnchorE2(event.currentTarget);
  const handleClose1 = () => setAnchorEl(null);
  const handleClose2 = () => setAnchorE2(null);

  return (
    <AppBar position="static"  sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', width: 'auto' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: theme.spacing(1, 2) }}>
        {/* Logo */}
    
          <StyledNavLink to="/" style={{ backgroundColor:'transparent', color: 'inherit' }}>
            <img src="/images/aarkayLogo.png" alt="Aarkay Logo" style={{ height: 40, width: 'auto' }} />
          </StyledNavLink>
        

        {/* Hamburger Icon for mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="end"  aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Navigation Links for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
          {/* Services Dropdown */}
          <Button  aria-controls="services-menu" aria-haspopup="true" onClick={handleClick1}>
            Services
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose1}>
            {services.map((service) => (
              <NavLink key={service.name} to={service.path} style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleClose1}>
                <MenuItem>
                  <service.icon sx={{ mr: 1, fontSize: 20 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{service.name}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary }}>{service.des}</Typography>
                  </Box>
                </MenuItem>
              </NavLink>
            ))}
          </Menu>
          {/* Who we serve */}
          <Button  aria-controls="services-menu" aria-haspopup="true" onClick={handleClick2}>
            What we serve
          </Button>
          <Menu anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={handleClose2}>
            {serve.map((serve) => (
              <NavLink key={serve.name} to={serve.path} style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleClose2}>
                <MenuItem>
                  <serve.icon sx={{ mr: 1, fontSize: 20 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{serve.name}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary }}>{serve.des}</Typography>
                  </Box>
                </MenuItem>
              </NavLink>
            ))}
          </Menu>
          {/* Other Links */}
          {navLinks.map((link) => (
            <StyledNavLink key={link.name} to={link.path}>
              <Button color="inherit"><strong>{link.name}</strong></Button>
            </StyledNavLink>
          ))}
        </Box>

        {/* Theme Toggle Button */}
        <ThemeToggle mode={mode} toggleColorMode={toggleColorMode} />
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {[...navLinks, ...services].map((item) => (
            <ListItem key={item.name} button onClick={toggleDrawer}>
              <StyledNavLink to={item.path}>
                <ListItemText primary={item.name} />
              </StyledNavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
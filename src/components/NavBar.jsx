import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { pathname } = useLocation();
  const isMobile = window.innerWidth < 600;

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Events', path: '/events' },
    { name: 'Resource Hub', path: '/resources' },
    { name: 'Collab Hub', path: '/collab' },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo/Brand */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Community App
        </Typography>

        {/* Desktop Navbar */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: '2rem' }}>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                color="inherit"
                component={Link}
                to={path}
                sx={{
                  fontWeight: 'bold', // Bold text for all menu items
                  color: pathname === path ? '#FF4081' : 'inherit', // Highlight active page
                  '&:hover': {
                    color: '#FF4081', // Change color on hover
                    transition: 'all 0.3s ease',
                    textDecoration: 'underline', // Underline on hover
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Navbar (Hamburger Menu) */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ marginTop: '45px' }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem
                  key={name}
                  component={Link}
                  to={path}
                  onClick={handleMenuClose}
                  sx={{
                    fontWeight: 'bold', // Make the mobile menu items bold
                    color: pathname === path ? '#FF4081' : 'inherit', // Highlight active menu item
                    '&:hover': {
                      color: '#FF4081', // Highlight color on hover
                    },
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



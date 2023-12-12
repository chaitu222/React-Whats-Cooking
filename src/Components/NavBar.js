import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import EggIcon from '@mui/icons-material/Egg';
import { Link } from 'react-router-dom';

function NavBar() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleLogoutClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };

  const LogoutHandler = () => {
    setAnchorEl({ type: 'USER_LOGOUT' });
      localStorage.removeItem('userInfo');
      localStorage.removeItem('Home');
      localStorage.removeItem('Explore');
      localStorage.removeItem('Feedback');
      localStorage.removeItem('profile');
      window.location.href = '/login';
    };
  

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#292b2c' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
            <Typography component={Link} to="/adminhome" style={{textDecoration:'none'}} sx={{ fontFamily: 'cursive', color: '#ffea00' }}>
              <EggIcon />
              What's Cooking?
            </Typography>
            <Tabs
              sx={{ marginRight: 'auto',color: 'white' }}
              textColor="inherit"
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
            >
              <Tab component={Link} to="/homepage" label="Home" />
              <Tab component={Link} to="/explore" label="Explore" />
              <Tab component={Link} to="/contact" label="Contact" />
              <Tab component={Link} to="/feedback" label="Feedback" />
            </Tabs>
    
          <div>
            <Button onClick={handleLogoutClick} sx={{ background: 'black' }} variant="contained">
              Profile
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/myprofile" onClick={handleMenuClose}>
                My Profile
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={LogoutHandler}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;

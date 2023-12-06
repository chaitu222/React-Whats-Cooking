// LandingPage.js
import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import landingbg from '../images/landingbg.jpg';

const LandingPage = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{
      backgroundImage: `url(${landingbg})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      minHeight: '30vh',
      minWidth: '100vh',
      padding: '130px',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Container
        style={{
          backgroundSize: '100% 100%',
          minWidth: '100vh',
          backgroundPosition: 'center',
          padding: '130px',
          backgroundRepeat: 'no-repeat',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '20px',
            padding: '20px',
            backgroundColor: 'white',

          }}
        >
          <Typography variant="h1" align="center" style={{ marginTop: '20px', color: 'black' }}>
            Welcome to What's Cooking
          </Typography>
          <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: 'black' }}>
            Find and share delicious recipes!
          </Typography>
          <div>
          <Button  onClick={handleLoginClick}  sx={{ background: 'orange' }} variant="contained"style={{ width:'120px', justifyContent: 'center',marginTop:'-10px' }} >
              Login
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/adminlogin" onClick={handleMenuClose}>
                Admin Login
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                User Login
              </MenuItem>
            </Menu>
          </div><br></br>
          <div style={{ display: 'flex', justifyContent: 'right', marginTop:'-53px'}}>
  <Button sx={{ background: 'orange' }} variant="contained" component={Link} to="/register">
    Register
  </Button>
</div>

        </div>
      </Container>
    </div>
  );
};

export default LandingPage;

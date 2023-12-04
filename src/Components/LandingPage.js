// LandingPage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import landingbg from '../images/landingbg.jpg';

const LandingPage = () => {
  return (
    <div  style={{
        backgroundImage: `url(${landingbg})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%', 
        minHeight: '30vh',
        minWidth:'100vh',
        padding:'130px',
        justifyContent: 'center',
        alignItems: 'center',
        
        }}>
    <Container
      style={{
        backgroundSize: '100% 100%', 
        minWidth:'100vh',
        backgroundPosition:'center',
        padding:'130px',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          borderRadius: '20px',
          padding: '20px',
          backgroundColor:'white',
         
        }}
      >
        <Typography variant="h1" align="center" style={{ marginTop: '20px', color: 'black' }}>
          Welcome to What's Cooking
        </Typography>
        <Typography variant="h4" align="center" style={{ marginBottom: '20px', color: 'black' }}>
          Find and share delicious recipes!
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
            style={{ marginRight: '20px' }}
          >
            Login
          </Button>
          <Button variant="contained" color="warning" component={Link} to="/register">
            Register
          </Button>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default LandingPage;

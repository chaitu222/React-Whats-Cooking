import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const HomePage = ({ setLoginUser }) => {
  return (
    <>
      <NavBar /> <br></br> <br></br>
      <Container sx={{ marginTop: '50px', width: '60%' }}>
        <Box
          sx={{
            padding: '20px',
            border: '3px solid #007bff',
            borderRadius: '20px',
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(39, 39, 39, 0.218)',
            marginTop: '200px',
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>
            Welcome to What's Cooking
          </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Explore thousands of recipes and cook like a pro!
          </Typography>
          <Typography variant="h5" sx={{ color: '#007bff', marginTop: '20px' }}>
            “What’s Cooking?”
          </Typography>
          <Typography variant="body1" sx={{ color: 'white' }}>
            It is a one-stop solution to find recipes that best match the ingredients in hand. “What’s Cooking?” makes
            your life easier by helping you decide what to cook based on the time and ingredients in hand. You no
            longer must surf various websites to find the “perfect” recipe.
          </Typography>
          <Typography variant="body1" sx={{ color: '#007bff' }} component={Link} to="/explore">
            EXPLORE
          </Typography><br></br><br></br>

          <Typography variant="body1" sx={{ color: 'white' }}>
            "Elevate your cooking game with our user-friendly platform, where you can search, save, and share your favorite recipes to make every meal a memorable experience."
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;

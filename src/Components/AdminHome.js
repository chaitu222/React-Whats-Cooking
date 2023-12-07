import React from 'react';
import { Container, Typography, Box,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

const AdminHomePage = ({ setLoginUser }) => {
  return (
    <>
      <AdminNav /> <br></br> <br></br>
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
           Hello <i style={{color:'yellow'}}>Chaitanya</i>
          </Typography>
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

      <Button  style={{ width:'10%',marginLeft:'45%' }} variant="contained"  component={Link} to="/userslist">
              Users List
            </Button>
    </>
  );
};

export default AdminHomePage;

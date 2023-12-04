import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <NavBar /> <br></br> <br></br>
      <Container sx={{ marginTop: '50px', width:'60%'}}>
        <Box
          sx={{
            padding: '20px',
            border: '3px solid #007bff',
            borderRadius: '20px',
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(39, 39, 39, 0.218)',
            marginTop: '50px',
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
          <Typography variant="body1" sx={{ color: 'white' }} component={Link} to="/explore">
          EXPLORE
          </Typography>
        </Box>

      
        <Box
          sx={{
            overflowX: 'scroll',
            whiteSpace: 'nowrap',
            marginTop: '80px',
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
          }}
        >
          <Card sx={{ width: 200, marginRight: '35px' }}>
            <CardMedia
              component="img"
              height="140"
              image={require('../images/landingbg.jpg').default}
              alt="Food 1"
            />
            <CardContent>
              <Typography variant="subtitle1">Biriyani</Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: 200, marginRight: '35px' }}>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/images/fooditems/dalchawal.jpg"
              alt="Food 2"
            />
            <CardContent>
              <Typography variant="subtitle1">Dal Chawal</Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: 200, marginRight: '35px' }}>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/images/fooditems/dalchawal.jpg"
              alt="Food 2"
            />
            <CardContent>
              <Typography variant="subtitle1">Dal Chawal</Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 200, marginRight: '35px' }}>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/images/fooditems/dalchawal.jpg"
              alt="Food 2"
            />
            <CardContent>
              <Typography variant="subtitle1">Dal Chawal</Typography>
            </CardContent>
          </Card>
          
          <Card sx={{ width: 200, marginRight: '35px' }}>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/images/fooditems/dalchawal.jpg"
              alt="Food 2"
            />
            <CardContent>
              <Typography variant="subtitle1">Dal Chawal</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;

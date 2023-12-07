// // ResetPassword.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     // Make an API call to initiate the password reset
//     axios.post('http://localhost:9002/login', { email })
//       .then((res) => {
//         alert('Password reset link sent successfully!');
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.error('Reset password error:', error);
//         alert('Failed to send password reset link. Please try again.');
//       });
//   };

//   return (
//     <>
//     <div className='login-container'>
//     <form>
//       <h2 style={{textAlign:'center',color:'white'}} >Reset Password</h2>
//       <label htmlFor="email" style={{textAlign:'center',color:'white'}}>Enter your email:</label> <br></br><br></br>
//       <input
//         type="email"
//         id="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="button" onClick={handleResetPassword}>
//         Send Reset Link
//       </button>
//     </form>
//     </div>
//     </>
//   );
// };

// export default ResetPassword;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, TextField, CssBaseline, Avatar, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('http://localhost:9002/resetpassword', { email })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((error) => {
        console.error('Error sending reset email:', error.message);
        setMessage('An error occurred while processing your request. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
    <div className='login-container'>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper   elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: 8, backgroundColor: '#1976D2' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form style={{ width: '100%', marginTop: 16 }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            style={{ margin: '24px 0 16px' }}
          >
            {loading ? 'Sending email...' : 'Reset Password'}
          </Button>
          <div className="message" style={{ textAlign: 'center', color: 'green' }}>
            {message}
          </div>
          <Link to="/login" style={{ textDecoration: 'none', color: '#1976D2', textAlign: 'center' }}>
            Back to Login
          </Link>
        </form>
      </Paper>
  
    </Container>
    </div>
    </>
  );
};

export default ResetPassword;

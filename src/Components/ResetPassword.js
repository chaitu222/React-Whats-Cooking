// ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Make an API call to initiate the password reset
    axios.post('http://localhost:9002/login', { email })
      .then((res) => {
        alert('Password reset link sent successfully!');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Reset password error:', error);
        alert('Failed to send password reset link. Please try again.');
      });
  };

  return (
    <>
    <div className='login-container'>
    <form>
      <h2 style={{textAlign:'center',color:'white'}} >Reset Password</h2>
      <label htmlFor="email" style={{textAlign:'center',color:'white'}}>Enter your email:</label> <br></br><br></br>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={handleResetPassword}>
        Send Reset Link
      </button>
    </form>
    </div>
    </>
  );
};

export default ResetPassword;

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
    <div>
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Send Reset Link</button>
    </div>
  );
};

export default ResetPassword;

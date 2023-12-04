import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LR.css';
import '../App.css';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Check if fields are empty
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Validation passed - log the form data
    console.log('LoggedIn successfully:', { username, password });

    // Redirect to the homepage
    navigate('/homepage');
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <center>
        <h1>Login</h1>
      </center>
      <br />
      <br />
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

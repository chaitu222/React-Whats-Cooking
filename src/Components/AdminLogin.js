import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  // State variables to manage username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Your predefined credentials
    const predefinedUsername = 'Chaitanya';
    const predefinedPassword = '12345';

    if (username.trim() === predefinedUsername && password === predefinedPassword) {
      // Successful login - navigate to the home page
      navigate('/adminhome');
    } else {
      // Failed login - show an error message or handle accordingly
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="admin-row">
        <div className="col-sm-12">
          <div className="login-container">
            <h2 className="text-center mb-4" style={{ color: 'white' }}>Admin Login</h2>
            <div className="login-form">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button> <br></br><br></br>
                <Link to="/resetpassword" style={{ textDecoration: 'none', color: 'white' }}>
                  Forgot Password?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

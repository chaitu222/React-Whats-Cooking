import React, { useState } from 'react';
import './LR.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // ... (your existing validation logic)

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Simulate successful registration
      console.log('Admin Registration:', admin);

      // Redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <h1 className="mb-6" style={{textAlign:'center'}}>Registration</h1><br/><br/>

<div className="mb-3">
  <input
    type="text"
    placeholder="Username"
    className="form-control"
    name="username"
    value={admin.username}
    onChange={handleInputChange}
    required
  />
  {errors.username && <div className="text-danger">{errors.username}</div>}
</div>

<div className="mb-3">
  <input
    type="email"
    placeholder="Email"
    className="form-control"
    name="email"
    value={admin.email}
    onChange={handleInputChange}
    required
  />
  {errors.email && <div className="text-danger">{errors.email}</div>}
</div>

<div className="mb-3">
  <input
    type="password"
    placeholder="Password"
    className="form-control"
    name="password"
    value={admin.password}
    onChange={handleInputChange}
    required
  />
  {errors.password && <div className="text-danger">{errors.password}</div>}
</div>

<div className="mb-3">
  <input
    type="password"
    placeholder="Confirm Password"
    className="form-control"
    name="confirmPassword"
    value={admin.confirmPassword}
    onChange={handleInputChange}
    required
  />
  {errors.confirmPassword && (
    <div className="text-danger">{errors.confirmPassword}</div>
  )}
</div>

<div className="mb-3">
  <select
    className="form-select"
    name="gender"
    value={admin.gender}
    onChange={handleInputChange}
    required
  >
    <option value="" disabled>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  {errors.gender && <div className="text-danger">{errors.gender}</div>}
</div>

<br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;

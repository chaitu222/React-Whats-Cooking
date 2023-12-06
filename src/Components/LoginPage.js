// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Comp.css'
// import '../App.css';
// import axios from "axios";

// //  function Login() {
// //   const navigate = useNavigate();

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const username = event.target.username.value;
// //     const password = event.target.password.value;

// //     // Check if fields are empty
// //     if (!username || !password) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     // Validation passed - log the form data
// //     console.log('LoggedIn successfully:', { username, password });

// //     // Redirect to the homepage
// //     navigate('/homepage');
// //   };

// const Login = ({ setLoginUser }) => {
//   const history = useNavigate();
 
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });
 
//   const [validationErrors, setValidationErrors] = useState({
//     email: "",
//     password: ""
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
//     // Clear validation error when user types in the input
//     setValidationErrors({
//       ...validationErrors,
//       [name]: ""
//     });
//   };
 
//   const validateFields = () => {
//     let isValid = true;
//     const newValidationErrors = {};
 
//     // Check for empty fields
//     Object.keys(user).forEach((key) => {
//       if (!user[key]) {
//         newValidationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
//         isValid = false;
//       }
//     });
 
//     setValidationErrors(newValidationErrors);
//     return isValid;
//   };
 
//   const login = () => {
//     if (validateFields()) {
//       axios
//         .post("http://localhost:9002/login", user)
//         .then((res) => {
//           alert(res.data.message);
//           setLoginUser(res.data.user);
//           history("/");
//         })
//         .catch((error) => {
//           if (error.response) {
//             console.error("Response error:", error.response.data);
//             console.error("Response status:", error.response.status);
//             console.error("Response headers:", error.response.headers);
//           } else if (error.request) {
//             console.error("Request error:", error.request);
//           } else {
//             console.error("Axios error:", error.message);
//           }
//         });
//     }
//   };
//   return (
//     <form className="login-container" onSubmit={handleSubmit}>
//       <center>
//         <h1>Login</h1>
//       </center>
//       <br />
//       <br />
//       <input type="text" name="username" placeholder="Username" />
//       <input type="password" name="password" placeholder="Password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
//  export default Login;

// Import necessary dependencies
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

// Define the Login component
const LoginPage = ({ setLoginUser }) => {
  // State to manage user input and validation errors
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });

  // State for loading indicator
  const [loading, setLoading] = useState(false);


  // Hook for navigation
  const navigate = useNavigate();

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // Clear validation error when the user types in the input
    setValidationErrors({
      ...validationErrors,
      [name]: '',
    });
  };

  // Function to perform field validation
  const validateFields = () => {
    let isValid = true;
    const newValidationErrors = {};

    // Check for empty fields
    Object.keys(user).forEach((key) => {
      if (!user[key]) {
        newValidationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        isValid = false;
      }
    });

    setValidationErrors(newValidationErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If validation is successful, proceed with login
    if (validateFields()) {
      setLoading(true); // Set loading indicator to true
      axios
        .post('http://localhost:9002/login', user)
        .then((res) => {
          alert(res.data.message);
          setLoginUser(res.data.user);
        
          navigate('/homepage');
        })
        .catch((error) => {
          if (error.response) {
            console.error('Response error:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            console.error('Request error:', error.request);
          } else {
            console.error('Axios error:', error.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // Render the login form
  return (
    <>
      <form className="login-container" onSubmit={handleSubmit}>
        <center>
          <h1>Login</h1>
        </center>
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <div className="error-message">{validationErrors.email}</div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <div className="error-message">{validationErrors.password}</div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <br></br>
        <Link to="/resetpassword" style={{ textDecoration: 'none', color: 'white' }}>
          Forgot Password?
        </Link>
      </form>
     
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button component={Link} to="/homepage" variant="contained">
            Go to Homepage
          </Button>
        </div>
      
    </>
  );
};

export default LoginPage;

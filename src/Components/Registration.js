// import React, { useState } from 'react';
// import './Comp.css'
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// // function Registration() {
// //   const navigate = useNavigate();

// //   const [admin, setAdmin] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     gender: '',
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setAdmin({ ...admin, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     let formErrors = {};

// //     // ... (your existing validation logic)

// //     if (Object.keys(formErrors).length > 0) {
// //       setErrors(formErrors);
// //     } else {
// //       // Simulate successful registration
// //       console.log('Admin Registration:', admin);

// //       // Redirect to the login page
// //       navigate('/login');
// //     }
// //   };

// const Registration = () => {
//   const history = useNavigate();
 
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     reEnterPassword: ""
//   });
 
//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     reEnterPassword: ""
//   });
 
//   const handleChange = e => {
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
//     Object.keys(user).forEach(key => {
//       if (!user[key]) {
//         newValidationErrors[key] = `${key} is required`;
//         isValid = false;
//       }
//     });
 
//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (user.email && !emailRegex.test(user.email)) {
//       newValidationErrors.email = "Invalid email format";
//       isValid = false;
//     }
 
//     // Validate password and reEnterPassword match
//     if (user.password !== user.reEnterPassword) {
//       newValidationErrors.reEnterPassword = "Passwords do not match";
//       isValid = false;
//     }
 
//     setValidationErrors(newValidationErrors);
//     return isValid;
//   };
 
//   const Registration = () => {
//     if (validateFields()) {
//       axios.post("http://localhost:9002/register", user)
//         .then(res => {
//           alert(res.data.message);
//           if (history && history.push) {
//             history.push("/login");
//           }
//         })
//         .catch(error => {
//           if (error.response) {
//             if (error.response.status === 400 && error.response.data.message) {
//               alert(error.response.data.message);
//             } else {
//               console.error("Registration error:", error);
//               alert("Internal Server Error");
//             }
//           } else {
//             console.error("Registration error:", error);
//             alert("Internal Server Error");
//           }
//         });
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//       <h1 className="mb-6" style={{textAlign:'center'}}>Registration</h1><br/><br/>

// <div className="mb-3">
//   <input
//     type="text"
//     placeholder="Username"
//     className="form-control"
//     name="username"
//     value={admin.username}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.username && <div className="text-danger">{errors.username}</div>}
// </div>

// <div className="mb-3">
//   <input
//     type="email"
//     placeholder="Email"
//     className="form-control"
//     name="email"
//     value={admin.email}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.email && <div className="text-danger">{errors.email}</div>}
// </div>

// <div className="mb-3">
//   <input
//     type="password"
//     placeholder="Password"
//     className="form-control"
//     name="password"
//     value={admin.password}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.password && <div className="text-danger">{errors.password}</div>}
// </div>

// <div className="mb-3">
//   <input
//     type="password"
//     placeholder="Confirm Password"
//     className="form-control"
//     name="confirmPassword"
//     value={admin.confirmPassword}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.confirmPassword && (
//     <div className="text-danger">{errors.confirmPassword}</div>
//   )}
// </div>

// <div className="mb-3">
//   <select
//     className="form-select"
//     name="gender"
//     value={admin.gender}
//     onChange={handleInputChange}
//     required
//   >
//     <option value="" disabled>Select gender</option>
//     <option value="male">Male</option>
//     <option value="female">Female</option>
//     <option value="other">Other</option>
//   </select>
//   {errors.gender && <div className="text-danger">{errors.gender}</div>}
// </div>

// <br/><br/>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Registration;


import React, { useState, useEffect } from "react";
import './Comp.css'
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import { Button } from "@mui/material";
 
const allSecurityQuestions = [
  "What was the name of your elementary school?",
  "In which city were you born?",
  "What is the name of your first pet?",
  "What is your favorite movie?",
  "Who is your favorite teacher?"
];
 
const RegisterPage = () => {
  const history = useNavigate();
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    securityQuestion1: "",
    securityAnswer1: "",
    securityQuestion2: "",
    securityAnswer2: ""
  });
 
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    securityAnswer1: "",
    securityAnswer2: ""
  });
 
  useEffect(() => {
    const [securityQuestion1, securityQuestion2] = getRandomQuestions();
    setUser((prevUser) => ({
      ...prevUser,
      securityQuestion1,
      securityQuestion2
    }));
  }, []);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    // Clear validation error when user types in the input
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };
 
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
 
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.email && !emailRegex.test(user.email)) {
      newValidationErrors.email = "Invalid email format";
      isValid = false;
    }
 
    // Validate password and reEnterPassword match
    if (user.password !== user.reEnterPassword) {
      newValidationErrors.reEnterPassword = "Passwords do not match";
      isValid = false;
    }
 
    setValidationErrors(newValidationErrors);
    return isValid;
  };
 
  const getRandomQuestions = () => {
    const shuffledQuestions = allSecurityQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 2);
  };
 
  const register = () => {
    if (validateFields()) {
      axios.post("http://localhost:9002/register", user)
        .then((res) => {
          alert(res.data.message);
          if (history && history.push) {
            history.push("/login");
          }
        })
        .catch((error) => {
          // Your existing error handling code here
        });
    }
  };
 
  return (
    <div className="login-container">
      <h1 style={{textAlign:'center'}}>Register</h1><br></br>
      {renderInput("name", "Your Name")}
      {renderInput("email", "Your Email")}
      {renderInput("password", "Your Password", "password")}
      {renderInput("reEnterPassword", "Re-enter Password", "password")}
      {renderSelect("securityQuestion1", "Security Question 1", user.securityQuestion1)}
      {renderInput("securityAnswer1", "Your Answer")}
      {renderSelect("securityQuestion2", "Security Question 2", user.securityQuestion2)}
      {renderInput("securityAnswer2", "Your Answer")}
      <Button variant="contained" color="primary" onClick={register}>
      Register
    </Button><br></br><br></br>
      <p style={{color:'white'}}>Already have an account?  
  <Link to="/login" style={{ textDecoration: 'none', color: 'yellow' }}> Login</Link></p>

    </div>
  );
 
  function renderInput(name, placeholder, type = "text") {
    return (
      <>
        <input
          type={type}
          name={name}
          value={user[name]}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {validationErrors[name] && <p className="error-message">{validationErrors[name]}</p>}
      </>
    );
  }
 
  function renderSelect(name, label, value) {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <select name={name} value={value} onChange={handleChange} disabled>
          <option value="" disabled>Select {label}</option>
          {allSecurityQuestions.map((question, index) => (
            <option key={index} value={question}>{question}</option>
          ))}
        </select>
      </>
    );
  }
};
 
export default RegisterPage;
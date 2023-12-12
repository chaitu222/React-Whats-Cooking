//safe code

// import React, { useState, useEffect } from "react";
// import './Comp.css'
// import axios from "axios";
// import { useNavigate, Link } from 'react-router-dom';
// import { Button } from "@mui/material";

// const allSecurityQuestions = [
//   "What was the name of your elementary school?",
//   "In which city were you born?",
//   "What is the name of your first pet?",
//   "What is your favorite movie?",
//   "Who is your favorite teacher?"
// ];

// const RegisterPage = () => {
//   const history = useNavigate();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     reEnterPassword: "",
//     securityQuestion1: "",
//     securityAnswer1: "",
//     securityQuestion2: "",
//     securityAnswer2: ""
//   });

//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     reEnterPassword: "",
//     securityAnswer1: "",
//     securityAnswer2: ""
//   });

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const [securityQuestion1, securityQuestion2] = getRandomQuestions();
//     setUser((prevUser) => ({
//       ...prevUser,
//       securityQuestion1,
//       securityQuestion2
//     }));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value
//     }));
//     // Clear validation error when user types in the input
//     setValidationErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: ""
//     }));

//   if (name === 'email') {
//     setError(null);
//   }
//   }

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

//   const getRandomQuestions = () => {
//     const shuffledQuestions = allSecurityQuestions.sort(() => 0.5 - Math.random());
//     return shuffledQuestions.slice(0, 2);
//   };

//   const register = () => {
//     if (validateFields()) {
//       axios.post("http://localhost:9002/register", user)
//         .then((res) => {
//           alert(res.data.message);
//           if (history && history.push) {
//             history.push("/login");
//           }
//           setError(null);
//         })
//         .catch((error) => {
//           if (error.response && error.response.status === 400 && error.response.data && error.response.data.message === "User already registered") {
//             setError("User with this email already exists");

//           } else {
//             setError("An error occurred during registration.");
//           }

//         });

//     }
//   };


//   return (
//     <div className="login-container">
//       <h1 style={{textAlign:'center'}}>Register</h1><br></br>
//       {renderInput("name", "Your Name")}
//       {renderInput("email", "Your Email")}
//       {renderInput("password", "Your Password", "password")}
//       {renderInput("reEnterPassword", "Re-enter Password", "password")}
//       {renderSelect("securityQuestion1", "Security Question 1", user.securityQuestion1)}
//       {renderInput("securityAnswer1", "Your Answer")}
//       {renderSelect("securityQuestion2", "Security Question 2", user.securityQuestion2)}
//       {renderInput("securityAnswer2", "Your Answer")}
//       {error && (
//         <div className="error-popup">
//           <p className="error-message">{error}</p>


//         </div>
//       )}
//       <Button variant="contained" color="primary" onClick={register}>
//       Register
//     </Button><br></br><br></br>
//       <p style={{color:'white'}}>Already have an account?  
//   <Link to="/login" style={{ textDecoration: 'none', color: 'yellow' }}> Login</Link></p>

//     </div>
//   );

//   function renderInput(name, placeholder, type = "text") {
//     return (
//       <>
//         <input
//           type={type}
//           name={name}
//           value={user[name]}
//           placeholder={placeholder}
//           onChange={handleChange}
//         />
//         {validationErrors[name] && <p className="error-message">{validationErrors[name]}</p>}
//       </>
//     );
//   }

//   function renderSelect(name, label, value) {
//     return (
//       <>
//         <label htmlFor={name}>{label}</label>
//         <select name={name} value={value} onChange={handleChange} disabled>
//           <option value="" disabled>Select {label}</option>
//           {allSecurityQuestions.map((question, index) => (
//             <option key={index} value={question}>{question}</option>
//           ))}
//         </select>
//       </>
//     );
//   }
// };

// export default RegisterPage;

import React, { useState, useEffect } from "react";
import './Comp.css'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
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

  const [error, setError] = useState(null);

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

    if (name === 'email') {
      setError(null);
    }
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
    if (user.password.length < 6) {
          newValidationErrors.password = "Password must be at least 6 characters long";
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
          setError(null);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400 && error.response.data && error.response.data.message === "User already registered") {
            setError(<p style={{ textAlign:'center',color:'red'}}>User with this email already exists</p>);

          } else {
            setError("An error occurred during registration.");
          }

        });

    }
  };
  return (
    <div className="login-container" style={{marginTop:'2%', padding:'3%'}}>
      <h1 style={{ textAlign: 'center' }}>User Register</h1> <br></br>
      {renderInput("name", "Your Name")}
      {renderInput("email", "Your Email")}
      {renderInput("password", "Your Password", "password")}
      {renderInput("reEnterPassword", "Re-enter Password", "password")}
      {renderSelect("securityQuestion1", "Security Question 1", user.securityQuestion1)}
      {renderInput("securityAnswer1", "Your Answer")}
      {renderSelect("securityQuestion2", "Security Question 2", user.securityQuestion2)}
      {renderInput("securityAnswer2", "Your Answer")}

      {error && (
        <div className="error-popup">
          <p className="error-message">{error}</p>
        </div>
      )}

      <Button variant="contained" color="primary" onClick={register}>Register</Button><br></br><br></br>     
       <p style={{ color: 'white' }}>Already have an account?
        <Link to="/login" style={{ color: 'yellow' }}> Login</Link></p>
        <p>Admin click here <a href="/adminlogin" style={{color:'skyblue'}}>Admin</a></p>

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
      {validationErrors[name] && <p className="error-message" style={{ color: 'red' }}>{validationErrors[name]}</p>} <br></br>
    </>
  );
}

function renderSelect(name, label, value) {
  return (
    <>
      <label htmlFor={name} style={{ color: 'yellow' }}>{label}</label>
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

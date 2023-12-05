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


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Registration = () => {
  const history = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value
    });
    // Clear validation error when user types in the input
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = {};

    // Check for empty fields
    Object.keys(admin).forEach(key => {
      if (!admin[key]) {
        newErrors[key] = `${key} is required`;
        isValid = false;
      }
    });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (admin.email && !emailRegex.test(admin.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate password and confirmPassword match
    if (admin.password !== admin.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      axios.post("http://localhost:9002/register", admin)
        .then(res => {
          alert(res.data.message);
          if (history && history.push) {
            history.push("/login");
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 400 && error.response.data.message) {
              alert(error.response.data.message);
            } else {
              console.error("Registration error:", error);
              alert("Internal Server Error");
            }
          } else {
            console.error("Registration error:", error);
            alert("Internal Server Error");
          }
        });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-6" style={{ textAlign: 'center' }}>Registration</h1><br /><br />

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

        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;

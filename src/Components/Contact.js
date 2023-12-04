import React, { useState } from 'react';
import NavBar from './NavBar';
import './LR.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic for form submission, e.g., send data to a server
  };

  return (
    <>
    <NavBar />
    <form className="login-container" onSubmit={handleSubmit}>
      <center>
        <h1>Contact Us</h1>
      </center>
      <br />
      <br />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </div>

      <div className="form-group">
        <label >Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
        />
      </div>

      <div className="form-group">
        <label >Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;

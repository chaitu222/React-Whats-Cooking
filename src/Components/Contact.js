import React, { useState } from 'react';
import NavBar from './NavBar';
import './Comp.css'
import axios from 'axios';
 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9002/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Failed to send message. Please try again.');
    }
  };
 
  return (

    <>
    <NavBar />
    <div>
     
      <form   class='login-container' onSubmit={handleSubmit}>
        <h1 style={{textAlign:'center'}}>Contact Us</h1><br></br>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br></br>
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};
 
export default Contact;
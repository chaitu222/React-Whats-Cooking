import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
 
const Feedback = ({ loginEmail }) => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailExists, setEmailExists] = useState(null); // Initially set to null
 
  useEffect(() => {
    // Check if the entered email matches the login email
    const checkEmail = async () => {
      try {
        const response = await axios.post('http://localhost:9002/check-email', { email });
        setEmailExists(response.data.exists);
      } catch (error) {
        console.error('Error checking email:', error.message);
        setEmailExists(false);
      }
    };
 
    if (email) {
      checkEmail();
    }
  }, [email]);
 
  const validateForm = () => {
    const errors = {};
 
    if (!email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
 
    if (feedback.length < 10) {
      errors.feedback = 'Feedback must be at least 10 characters';
    }
 
    return errors;
  };
 
  const saveFeedbackToBackend = async (data) => {
    try {
    await axios.post('http://localhost:9002/submit-feedback', data);
      console.log('Feedback submitted successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      setErrors({ submit: 'Error submitting feedback. Please try again.' });
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Validate form
    const validationErrors = validateForm();
 
    if (Object.keys(validationErrors).length === 0) {
      // Check if entered email matches login email (only if email exists)
      if (emailExists) {
        // Log feedback data to console
        const feedbackData = {
          email,
          feedback,
          timestamp: new Date().toISOString(),
        };
 
        // Store feedback in the database
        saveFeedbackToBackend(feedbackData);
      } else {
        setErrors({ email: 'Email not found. Please enter a valid email address.' });
      }
    } else {
      setErrors(validationErrors);
    }
  };
 
  return (
    <>
    <NavBar />
    <div>
      {isSubmitted ? (
        <div className='login-container'>
          <h1 style={{ marginTop: '10%', textAlign: 'center' }}>Thank you for your feedback!</h1>
        </div>
      ) : (
        <form className='login-container' onSubmit={handleSubmit}>
          <center><h1>Feedback</h1></center><br /><br />
          <div>
            <input
              type="email" placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          {!emailExists && email && <p>Email not found. Please enter a valid email address.</p>}
          <div>
            <textarea
              value={feedback} placeholder='Give your Feedback'
              onChange={(e) => setFeedback(e.target.value)}
            />
            {errors.feedback && <p>{errors.feedback}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    </>
  );
};
 
export default Feedback;
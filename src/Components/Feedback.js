import React, { useState } from 'react';
import './Comp.css';
import NavBar from './NavBar';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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

  const saveFeedbackToConsole = (data) => {
    console.log('Feedback Data:', data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Log feedback data to console
      const feedbackData = {
        email,
        feedback,
        timestamp: new Date().toISOString(),
      };

      saveFeedbackToConsole(feedbackData);
      
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <NavBar /><br></br>
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
  );
};

export default Feedback;

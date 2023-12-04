import React, { useState } from 'react';
import './LR.css'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, can submit or process data
      setIsSubmitted(true);
      // Here you can handle submitting the form data (e.g., send it to an API)
    } else {
      // Set errors for invalid fields
      setErrors(validationErrors);
    }
  };

  return (
    
    <div>
        <NavBar />
      {isSubmitted ? (
        <div>
          <h1>Thank you for your feedback!</h1>
        </div>
      ) : (
        <form   class='login-container' onSubmit={handleSubmit}>
           <center><h1>Feedback</h1></center><br/><br/>
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
              value={feedback}  placeholder='Give your Feedback'
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

export default Feedback;
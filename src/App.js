// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/Registration';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import FeedbackForm from './Components/Feedback';
import ProfilePage from './Components/Profile';



const App = () => {
  return (
    
    <div className='background'>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/myprofile" element={<ProfilePage />} />

        <Route path="/"  element={<LandingPage />} />
      </Routes>
    </Router>
    </div>
  
  );
};

export default App;

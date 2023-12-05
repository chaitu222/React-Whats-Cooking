// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './Components/LandingPage';
// import LoginPage from './Components/LoginPage';
// import RegisterPage from './Components/Registration';
// import HomePage from './Components/HomePage';
// import Contact from './Components/Contact';
// import FeedbackForm from './Components/Feedback';
// import ProfilePage from './Components/Profile';
// import Explore from './Components/Explore';



// function App() {
//   const [user, setLoginUser] = useState({});

//   return (
    
//     <div className='background'>
//     <Router>
//       <Routes>
//       <Route
//             path="/"
//             element={
//               user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser} />
//             }
//           />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/homepage" element={<HomePage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/feedback" element={<FeedbackForm />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/myprofile" element={<ProfilePage />} />

//         <Route path="/"  element={<LandingPage />} />
//       </Routes>
//     </Router>
//     </div>
  
//   );
// };

// export default App;

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/Registration';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import FeedbackForm from './Components/Feedback';
import ProfilePage from './Components/Profile';
import Explore from './Components/Explore';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className='background'>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/"  element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import React, { useState } from 'react';


import './Comp.css'
import NavBar from './NavBar';
function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const enableEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <NavBar />
      <div className="login-container" style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="profile-container">
              <h2 className="text-center mb-4" style={{ color: 'white' }}>My Profile</h2>
              
              <div className="edit-buttons">
                <button type="button" className="btn btn-primary"style={{ fontSize: '12px', display: 'block', width: '100%' }}  onClick={enableEdit}>
                  Edit Profile
                </button><br></br>
               {''}
              </div>
              <form className="profile-form" onSubmit={handleSubmit} style={{marginTop:'30px'}}>
                <div className="form-group">
                  <label htmlFor="username" className="text-white">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="YourUsername"
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="bio" className="text-white">Bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    placeholder="Tell us about yourself"
                    disabled={!isEditing}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isEditing}>
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default ProfilePage;

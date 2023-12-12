import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [userList, setUserList] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:9002/admin/user-list', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUserList(data.users);
        } else {
          console.error('Error fetching user list:', data.message);
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);
 
  const handleDeleteUser = (userId) => {
    // Remove the user from the frontend state
    const updatedUserList = userList.filter(user => user._id !== userId);
    setUserList(updatedUserList);
 
    // Make a separate request to the server to delete the user from the database
    fetch(`http://localhost:9002/admin/delete-user/${userId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (!data.success) {
          console.error('Error deleting user from the server:', data.message);
        }
      })
      .catch(error => console.error('Delete user request error:', error));
  };
 
  return (
    <>
    <div className='login-container'>
      <h1 style={{textAlign:'center'}}>Registered User List</h1><br></br>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user._id} style={{ color: 'white' }}>
              <td style={tableCellStyle}>{user._id}</td>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Button  style={{ width:'20%',marginLeft:'40%' }} variant="contained"  component={Link} to="/adminhome">
    Go to Home page
  </Button>
  </>
  );
};
 
// Inline styles for table header cells
const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};
 
// Inline styles for table cells
const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};
 
export default AdminDashboard;
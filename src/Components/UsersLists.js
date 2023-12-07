import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { Modal } from 'react-responsive-modal';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize } from '@mui/material';
import NavBar from './NavBar';

function UsersList() {
  const blankUser = {
    name: '',
    email: '',
    address: '',
  };

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('Add');
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState(blankUser);
  const [editIndex, setEditIndex] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction('Add');
  };

  const addUser = () => {
    setUserdata([...userdata, user]);
    setUser(blankUser);
    onCloseModal();
  };

  const editUser = (index) => {
    setAction('Edit');
    const selectedUser = userdata.find((x, i) => i === index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal();
  };

  const updateUser = () => {
    const newUsers = userdata.map((x, i) => (i === editIndex ? user : x));
    setUserdata(newUsers);
    setUser(blankUser);
    setEditIndex(null);
    onCloseModal();
  };

  const deleteUser = (index) => {
    const newUsers = userdata.filter((x, i) => i !== index);
    setUserdata(newUsers);
  };

  return (
    <>
    <NavBar />
    <div className="login-container">
      <div className="d-flex">
        <h1 style={{ textAlign: 'center' }}>Users List</h1>
      </div>
      <br />
      <div className="toolbar">
        <Button variant="contained" color="primary" onClick={onOpenModal}>
          <PlusCircle size={29} />
          <span></span>
        </Button>
      </div>
      <hr />

      <TableContainer>
        <Table style={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{background:'white'}}>
            {userdata.length > 0 &&
              userdata.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => editUser(index)}>
                      <Edit size={16} />
                      <span>Edit</span>
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => deleteUser(index)}>
                      <Trash2 size={16} />
                      <span>Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>{action} User</h2>
        <div className="form">
          <TextField label="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} fullWidth margin="normal" />
          <TextField label="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} fullWidth margin="normal" />
          <TextareaAutosize
            label="Address"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            rowsMin={5}
            placeholder="Address"
            style={{ width: '100%', marginBottom: '16px' }}
          />
          {action === 'Add' && (
            <Button variant="contained" color="primary" onClick={() => addUser()}>
              Submit
            </Button>
          )}
          {action === 'Edit' && (
            <Button variant="contained" color="primary" onClick={() => updateUser()}>
              Update
            </Button>
          )}
        </div>
      </Modal>
    </div>
    </>
  );
}

export default UsersList;

import React, { useState } from 'react';
import { Header } from '../assets/components/Header';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export const Landingpage = () => {
  const [data, setData] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [hobby, setHobby] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSaveUser = (user) => {
    setData([...data, user]);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setAddress(user.address);
    setHobby(user.hobby);
    setEditOpen(true);
  };

  const handleEditSave = () => {
    if (!name || !address || !hobby) {
      alert('Please fill in all fields');
      return;
    }
  
    const updatedUser = { ...selectedUser, name, address, hobby };
    const updatedData = data.map((item) => (item.name === selectedUser.name ? updatedUser : item));
    setData(updatedData);
    setEditOpen(false);
  };
  

  const handleEditCancel = () => {
    setEditOpen(false);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header onAddUser={handleSaveUser} />
      <TextField
        autoFocus
        margin="dense"
        label="Search"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginTop: '20px', borderRadius: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        variant="outlined"
        outlined={true}
      />
      <table style={{ border: '1px solid black', margin: 'auto', width: '200px', height: '100px' }}>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.name}>
              <td colSpan="2" >
                <span style={{ fontSize: '2rem' }}>{item.name}</span><br />
                {item.address}
              </td>
              <td style={{ fontSize: '1.5rem' }}>{item.hobby}
              <br/>
                <Button variant="contained" color="primary" onClick={() => handleEditUser(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={editOpen} onClose={handleEditCancel}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth />
          <TextField label="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleEditCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

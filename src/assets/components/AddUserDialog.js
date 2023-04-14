import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const AddUserDialog = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [hobby, setHobby] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleHobbyChange = (event) => setHobby(event.target.value);

  const handleSave = () => {
    const newUser = { name, address, hobby };
    onSave(newUser);
    setName('');
    setAddress('');
    setHobby('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          margin="dense"
          label="Address"
          fullWidth
          value={address}
          onChange={handleAddressChange}
        />
        <TextField
          margin="dense"
          label="Hobby"
          fullWidth
          value={hobby}
          onChange={handleHobbyChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} disabled={!name || !address || !hobby}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;

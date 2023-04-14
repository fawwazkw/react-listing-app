import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';

export const EditDialog = ({ open, onClose, onSave, user }) => {
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [hobby, setHobby] = useState(user.hobby);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleHobbyChange = (event) => {
    setHobby(event.target.value);
  };

  const handleSave = () => {
    onSave({ ...user, name, address, hobby });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            required
            fullWidth
          />
          <TextField
            label="Address"
            value={address}
            onChange={handleAddressChange}
            required
            fullWidth
          />
          <TextField
            label="Hobby"
            value={hobby}
            onChange={handleHobbyChange}
            required
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

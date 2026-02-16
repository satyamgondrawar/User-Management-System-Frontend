
import React, { useEffect, useState } from "react";
import EnhancedTable from "../../components/table/EnhancedTable";
import axios from "axios";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

const User = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const columns = [
    { field: "name", title: "Name" },
    { field: "email", title: "Email" },
    { field: "gender", title: "Gender" },
  ];

  // 🔹 Fetch Users
  const apiCall = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users"
      );
      setRows(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  // 🔹 Open / Close Dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Submit Form
  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/users",
        formData
      );

      handleClose();
      apiCall(); // refresh table

      // reset form
      setFormData({
        name: "",
        email: "",
        gender: "",
      });

    } catch (error) {
      console.error("Add User Error:", error);
    }
  };

  //for delete User
  const handleDelete = async (id) => {
    console.log('id', id)
    try {
      await axios.delete(
        `http://localhost:8000/api/users/${id}`
      );
      apiCall(); // refresh table
    } catch (error) {
      console.error("Delete User Error:", error);
    }
  };


  return (
    <div>
      <EnhancedTable
        columns={columns}
        rows={rows}
        showActions={true}
        handleDelete={(id) => handleDelete(id)}
      />

      {/* 🔥 Add Button */}
      <div style={{ marginTop: 20, textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Add User
        </Button>
      </div>

      {/* 🔥 Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>

        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Gender"
            name="gender"
            select
            fullWidth
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default User;

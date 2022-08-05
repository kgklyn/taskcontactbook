import { Box, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../ContactContext";

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(contactContext);

  const [editContact, setEditContact] = useState(contactToEdit);
  useEffect(() => {
    setEditContact(contactToEdit);
  }, [contactToEdit]);

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };

  const navigate = useNavigate();

  return (
    <>
      {editContact ? (
        <Paper
          sx={{
            width: "40%",
            minHeight: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5em auto",
            background:
              "url('https://t3.ftcdn.net/jpg/01/26/35/58/360_F_126355834_UU0Q9hZQLD3xsjs8X6V1jb0tyIjfM3zg.jpg')",
          }}
          elevation={20}
        >
          <Box
            sx={{
              display: "flex",
              m: 3,
              flexDirection: "column",
              width: 500,
              margin: "5em auto",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              onChange={handleInp}
              value={editContact.name}
            />
            <TextField
              id="outlined-basic"
              label="LastName"
              variant="outlined"
              name="lastName"
              onChange={handleInp}
              value={editContact.lastName}
            />
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              name="number"
              onChange={handleInp}
              value={editContact.number}
            />
            <TextField
              id="outlined-basic"
              label="Photo"
              variant="outlined"
              name="photo"
              onChange={handleInp}
              value={editContact.photo}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#00b4d8", width: "45%", mt: 1 }}
                onClick={() => {
                  saveContact(editContact);
                  navigate("/");
                }}
              >
                SAVE
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "black", width: "45%", mt: 1 }}
                onClick={() => {
                  navigate("/");
                }}
              >
                CANCEL
              </Button>
            </Box>
          </Box>
        </Paper>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditContact;

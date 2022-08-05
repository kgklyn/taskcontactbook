import { Box, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";

const AddContact = () => {
  const { addContact } = useContext(contactContext);
  //   console.log(addContact);

  const [person, setPerson] = useState({
    name: "",
    number: "",
    photo: "",
  });
  console.log(person);
  const handleInp = (e) => {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  };

  return (
    <Box
      sx={{
        display: "flex",
        m: 3,
        flexDirection: "column",
        width: 800,
        margin: "5em auto",
      }}
    >
      <TextField
        sx={{
          label: { color: "black" },
          marginBottom: "1em",
          border: "solid 1px white",
        }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
        value={person.name || ""}
      />
      <TextField
        sx={{
          label: { color: "black" },
          marginBottom: "1em",
          border: "solid 1px white",
        }}
        id="outlined-basic"
        label="LastName"
        variant="outlined"
        name="lastName"
        onChange={handleInp}
        value={person.lastName || ""}
      />
      <TextField
        sx={{
          label: { color: "black" },
          marginBottom: "1em",
          border: "solid 1px white",
        }}
        id="outlined-basic"
        label="Number"
        variant="outlined"
        name="number"
        onChange={handleInp}
        value={person.number || ""}
      />
      <TextField
        sx={{
          label: { color: "black" },
          marginBottom: "1em",
          border: "solid 1px white",
        }}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
        name="photo"
        onChange={handleInp}
        value={person.photo || ""}
      />
      <Button
        className="btn-add"
        sx={{ backgroundColor: "#00b4d8", color: "white" }}
        variant="outlined"
        size="large"
        onClick={() => {
          addContact(person);
          setPerson({ name: "", number: "", photo: "" });
        }}
      >
        ADD CONTACT
      </Button>
    </Box>
  );
};

export default AddContact;

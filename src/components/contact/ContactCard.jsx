import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contactContext } from "../../ContactContext";
import { Link } from "react-router-dom";

export default function ContactCard({ item }) {
  const { deleteContact, editContact } = useContext(contactContext);
  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.photo}
        alt="green iguana"
      />
      <CardContent
        sx={{
          color: "white",
          background:
            "url('data:image/jpeg;base64,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')",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2">{item.lastName}</Typography>
        <Typography variant="body2">{item.number}</Typography>
      </CardContent>
      <CardActions>
        <Link to="/edit" style={{ textDecoration: "none" }}>
          <Button
            size="small"
            sx={{ backgroundColor: "#00b4d8" }}
            variant="contained"
            onClick={() => editContact(item.id)}
          >
            EDIT
          </Button>
        </Link>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => deleteContact(item.id)}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { addToCart } from "../Actions/CartActions";

function Pizza({ _id, name, price, desc, picture }) {
  const userToken = localStorage.getItem("userToken") || null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: "400px" }}>
      <CardMedia
        component="img"
        image={picture}
        alt={name}
        sx={{ height: "auto", maxWidth: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ height: "35px", fontSize: 15 }}
        >
          {desc}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardActions>
          <IconButton
            onClick={() => {
              if (!userToken) navigate("/SignIn");
              else dispatch(addToCart({ _id, name, price, qte: 1 }));
            }}
          >
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </CardActions>
        <Typography variant="h6">{price} €</Typography>
      </CardContent>
    </Card>
  );
}

export default Pizza;

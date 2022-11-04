import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { addToCart } from "../Actions/CartActions";

import { Link } from "react-router-dom";

function Pizza({ _id, name, price, desc, picture }) {
  const userToken = localStorage.getItem("userToken") || null;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <Card sx={{ width: "400px", boxShadow: "2px 2px 3px black" }}>
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
              else {
                const productExists =
                  cart.find((product) => product._id === _id) || null;
                if (productExists === null)
                  dispatch(addToCart({ _id, name, price, qte: 1 }));
              }
            }}
          >
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Link
            to={`/PizzaDetails/${_id}`}
            style={{ textDecoration: "none", marginLeft: "10px" }}
          >
            <IconButton>
              <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Link>
        </CardActions>
        <Typography variant="h6">{price} €</Typography>
      </CardContent>
    </Card>
  );
}

export default Pizza;

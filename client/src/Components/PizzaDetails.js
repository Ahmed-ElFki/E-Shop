import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import PizzaComment from "./PizzaComment";

function PizzaDetails() {
  const { _id } = useParams();
  const [pizza, setPizza] = useState([]);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const loggedID = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPizza() {
      const pizza = await axios
        .post(`/products/${_id}`)
        .then((res) => setPizza(res.data.product));
    }
    async function getPizzaComments() {
      const pizza = await axios
        .post(`/comments/${_id}`)
        .then((res) => setCommentsList(res.data.productComments));
    }

    if (!loggedID) navigate("/signin");
    else {
      getPizza();
      getPizzaComments();
    }
  }, [commentsList]);

  async function addComment() {
    const pizzaComment = await axios.post("/comments/register", {
      userId: loggedID,
      productId: _id,
      comment,
    });
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px auto",
        width: "100vw",
      }}
    >
      <img
        src={pizza.picture}
        alt={pizza.name}
        style={{
          width: "80vw",
          height: "30vw",
          borderRadius: "10px",
          boxShadow: "3px 3px 3px black",
        }}
      />
      <TextField
        type="text"
        multiline={true}
        minRows={4}
        maxRows={4}
        onChange={(e) => setComment(e.target.value)}
        sx={{ width: "80vw", mt: "20px" }}
      />
      <Button
        variant="contained"
        sx={{
          width: "80vw",
          mt: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          fontSize: 15,
        }}
        onClick={() => addComment()}
      >
        Submit comment
      </Button>
      {commentsList.map((currentComment, key) => {
        return (
          <PizzaComment
            key={key}
            commentId={currentComment._id}
            userId={currentComment.userId}
            productId={currentComment.productId}
            comment={currentComment.comment}
          />
        );
      })}
    </Box>
  );
}

export default PizzaDetails;

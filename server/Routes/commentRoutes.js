const express = require("express");
const { authSuper } = require("../controllers/authorize");
const {
  registerComment,
  deleteComment,
  getAllComments,
  getProductComments,
  updateComment,
} = require("../controllers/commentControllers");

const commentRoutes = express.Router();

commentRoutes.post("/register", registerComment);

commentRoutes.post("/all", getAllComments);

commentRoutes.post("/:_id", getProductComments);

commentRoutes.delete("/delete/:_id", deleteComment);

commentRoutes.patch("/update/:_id", updateComment);

module.exports = commentRoutes;

const express = require("express");
const { authSuper } = require("../controllers/authorize");
const {
  registerUser,
  loginUser,
  deleteUser,
  getUsers,
  updateUser,
  getUserData,
} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

userRoutes.post("/all", getUsers);

userRoutes.post("/", getUserData);

userRoutes.delete("/delete", deleteUser);

userRoutes.patch("/update", updateUser);

module.exports = userRoutes;

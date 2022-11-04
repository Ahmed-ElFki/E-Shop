import { Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useNavigate } from "react-router";

import axios from "axios";

function UpdateProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const loggedUserID = localStorage.getItem("userId") || null;
  const navigate = useNavigate();

  async function updateProfile() {
    // eslint-disable-next-line
    const updateUser = await axios.patch("/users/update", {
      _id: loggedUserID,
      fullName,
      email,
      gender,
      password,
    });
  }

  if (!loggedUserID) navigate("/");

  return (
    <Grid
      columns={1}
      rowSpacing={10}
      sx={{
        width: "80vw",
        height: "450px",
        margin: "25vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Grid item lg={1}>
        <TextField
          label="Full name"
          type="text"
          variant="outlined"
          required
          sx={{ width: "20vw" }}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Grid>
      <Grid item lg={1}>
        <Select
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
          sx={{ width: "20vw" }}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </Grid>
      <Grid item lg={1}>
        <TextField
          label="Email"
          type="text"
          variant="outlined"
          required
          sx={{ width: "20vw" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item lg={1}>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          sx={{ width: "20vw" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item lg={1}>
        <Button
          variant="contained"
          sx={{ width: "20vw", fontSize: 15, padding: "15px" }}
          onClick={updateProfile}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
}

export default UpdateProfile;

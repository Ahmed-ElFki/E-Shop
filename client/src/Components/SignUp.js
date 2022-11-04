import { Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import axios from "axios";

import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");

  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "check Full Name/email/password fields"
  );

  async function signUpUser() {
    const user = await axios.post("/users/register", {
      fullName,
      gender,
      email,
      password,
    });
    const userId = user.data["userId"] || null;
    const message = user.data["message"] || null;

    if (!userId && message) {
      setSignUpSuccess(false);
      setErrorMessage(message);
    } else {
      setSignUpSuccess(true);
      setErrorMessage("You are signed up !");
      navigate("/SignIn");
    }
  }
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
        <Alert
          severity={signUpSuccess ? "success" : "error"}
          sx={{ width: "450px", fontSize: 15 }}
        >
          <AlertTitle>{signUpSuccess ? "Success" : "Error"}</AlertTitle>
          This is {signUpSuccess ? "a success" : "an error"} alert —{" "}
          <strong>{errorMessage}</strong>
        </Alert>
      </Grid>
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item lg={1}>
        <Button
          variant="contained"
          sx={{ width: "20vw", fontSize: 15, padding: "15px" }}
          onClick={() => signUpUser()}
        >
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
}

export default SignUp;

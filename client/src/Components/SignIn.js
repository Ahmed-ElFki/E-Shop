import { Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router";

import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "check email/password fields"
  );

  async function signInUser() {
    const user = await axios.post("/users/login", { email, password });
    const userToken = user.data["userToken"] || null;
    const accountType = user.data["accountType"] || null;
    const userId = user.data["userId"] || null;
    const message = user.data["message"] || null;

    if (!userToken && message) {
      setIsLogged(false);
      setErrorMessage(message);
    } else {
      setIsLogged(true);
      setErrorMessage("You are good to go !");
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("accountType", accountType);
      localStorage.setItem("userId", userId);
      navigate("/");
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
          severity={isLogged ? "success" : "error"}
          sx={{ width: "450px", fontSize: 15 }}
        >
          <AlertTitle>{isLogged ? "Success" : "Error"}</AlertTitle>
          This is {isLogged ? "a success" : "an error"} alert —{" "}
          <strong>{errorMessage}</strong>
        </Alert>
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
          onClick={() => signInUser()}
        >
          Sign in
        </Button>
      </Grid>
      <Grid item lg={1}>
        <Button
          variant="contained"
          sx={{ width: "20vw", fontSize: 15, padding: "15px" }}
          onClick={() => navigate("/SignUp")}
        >
          No account ? Subscribe here !
        </Button>
      </Grid>
    </Grid>
  );
}

export default SignIn;

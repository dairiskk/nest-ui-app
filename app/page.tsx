// src/components/LoginScreen.js
import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  CssBaseline,
} from "@mui/material";

const LoginScreen = () => {
  const containerStyle = {
    backgroundColor: "white",
    color: "black",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const formStyle = {
    width: "100%",
    marginTop: "1rem",
  };

  const submitButtonStyle = {
    margin: "2rem 0 2rem",
  };

  return (
    <Container component="main" maxWidth="xs" style={containerStyle}>
      <CssBaseline />
      <div style={paperStyle}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form style={formStyle}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            color="primary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitButtonStyle}
          >
            Sign In
          </Button>
        </form>
        <div>
          <Link href="#" variant="body2" color="primary">
            Forgot password?
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default LoginScreen;

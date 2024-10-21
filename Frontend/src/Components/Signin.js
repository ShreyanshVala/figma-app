import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import greenImg from "../Images/green.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import GoogleButton from "react-google-button";
import AppleIcon from "@mui/icons-material/Apple";
import axios from "axios";

export const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onchangeEmailError = (e) => {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Entered value does not match email format");
    } else {
      setEmailError("");
    }
  };

  const onChangePasswordError = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must have at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setEmailError(!email ? "Email is required" : "");
      setPasswordError(!password ? "Password is required" : "");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/create", {
        email,
        password,
      });
      if (response.status === 201) {
        // Assuming the user creation is successful
        dispatch(setUser({ email, password }));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error while creating user:", error);
      // Handle errors, for example, show error messages to users
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          // flex: 2,
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "560px",
          textAlign: "left",
          paddingLeft: 20,
        }}
      >
        <Typography variant="h5" mt={1}>
          Welcome back!
        </Typography>

        <Typography variant="subtitle1" mb={3} sx={{ fontWeight: "bold" }}>
          Enter your Credentials to access your account
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Email address
        </Typography>

        <FormControl error variant="standard" mt={6} fullWidth>
          <TextField
            sx={{ width: "500px" }}
            id="outlined-email-input"
            label="Email"
            // margin="normal"
            value={email}
            onChange={onchangeEmailError}
            error={!!emailError}
          />
          <FormHelperText sx={{ marginTop: "0px" }} id="component-error-text">
            {emailError}
          </FormHelperText>
        </FormControl>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Password
        </Typography>

        <FormControl error variant="standard" fullWidth>
          <TextField
            sx={{ width: "500px" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            // margin="normal"
            value={password}
            onChange={onChangePasswordError}
            error={!!passwordError}
          />
          <FormHelperText sx={{ marginTop: "0px" }} id="component-error-text">
            {passwordError}
          </FormHelperText>
        </FormControl>

        <FormControlLabel
          mb={30}
          control={<Checkbox defaultChecked />}
          label="Remember for 30 days"
        />
        <br />
        <Button
          variant="contained"
          sx={{
            width: "500px",
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <p>
          ______________________________________or__________________________________
        </p>

        <Box display="flex" gap={2}>
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />

          <Button
            variant="contained"
            startIcon={<AppleIcon />}
            sx={{
              width: "239px",
              paddingRight: "20px",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Sign in with Apple
          </Button>
        </Box>
        <br></br>
        <Typography
          sx={{
            marginTop: "1px",
            textAlign: "center",
            fontWeight: "bold",
            marginRight: "170px",
          }}
        >
          Don't Have an account?{" "}
          <Link to="/signupp" sx={{ textDecoration: "none" }}>
            Signup
          </Link>
        </Typography>
      </Box>

      <Box>
        <img
          src={greenImg}
          alt="Sign in illustration"
          style={{ maxWidth: "100vw", maxHeight: "100vh" }}
        />
      </Box>
    </Box>
  );
};

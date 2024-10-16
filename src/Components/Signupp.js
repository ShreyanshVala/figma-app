import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Link, useNavigate } from "react-router-dom";
import greenImg from "../Images/green.jpg";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import GoogleButton from "react-google-button";
import AppleIcon from "@mui/icons-material/Apple";

export const Signupp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onchangeNameError = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim().length < 3) {
      setNameError("Name must be at least 3 characters long");
    } else {
      setNameError("");
    }
  };

  const onchangeEmailError = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Entered value does not match email format");
    } else {
      setEmailError("");
    }
  };

  const onChangePasswordError = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must have at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      setNameError(!name ? "Name is required" : "");
      setEmailError(!email ? "Email is required" : "");
      setPasswordError(!password ? "Password is required" : "");
      return;
    }
    setTimeout(() => {
      dispatch(setUser({ name, email, password }));
      navigate("/dashboard", { replace: true });
    }, 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        px: 22,
      }}
    >
      <Box
        sx={{
          width: "560px",
          textAlign: "left",
        }}
      >
        <Typography variant="h5" mt={20} gutterBottom>
          Get Started Now
        </Typography>

        <Box
          sx={{
            width: "300px",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Name
          </Typography>
          <FormControl error variant="standard" fullWidth>
            <TextField
              sx={{ width: "500px" }}
              id="outlined-name-input"
              label="Name"
              margin="normal"
              value={name}
              onChange={onchangeNameError}
              error={!!nameError}
            />
            <FormHelperText
              sx={{ marginTop: "-7px" }}
              id="component-error-text"
            >
              {nameError}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Email address
          </Typography>

          <FormControl error variant="standard" mt={6} fullWidth>
            <TextField
              sx={{ width: "500px" }}
              id="outlined-email-input"
              label="Email"
              margin="normal"
              value={email}
              mt={5}
              onChange={onchangeEmailError}
              error={!!emailError}
            />
            <FormHelperText
              sx={{ marginTop: "-7px" }}
              id="component-error-text"
            >
              {emailError}
            </FormHelperText>
          </FormControl>
        </Box>

        <Box>
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
              margin="normal"
              value={password}
              onChange={onChangePasswordError}
              error={!!passwordError}
            />
            <FormHelperText
              sx={{ marginTop: "-7px" }}
              id="component-error-text"
            >
              {passwordError}
            </FormHelperText>
          </FormControl>
        </Box>

        <FormControlLabel
          mt={3}
          control={<Checkbox defaultChecked />}
          label="I agree to the terms & policy"
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
          Signup
        </Button>
        <p>
          ___________________________________or______________________________________
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
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            marginRight: "80px",
          }}
        >
          Have an account?{" "}
          <Link to="/" sx={{ textDecoration: "none" }}>
            Signin
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={greenImg}
          alt="Sign in illustration"
          style={{ maxWidth: "500px" }}
        />
      </Box>
    </Box>
  );
};

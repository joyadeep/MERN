import React, { useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AuthUser } from "../api/Post-api";
import { useDispatch, useSelector } from "react-redux";
import { login} from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const authstate = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      isSignup
        ? AuthUser(true, inputs)
        .then((data)=>localStorage.setItem("userId",data._id))
        .then(() => {
            dispatch(login());
            navigate("/posts")
          })
        : AuthUser(false, inputs)
            .then((data) => localStorage.setItem("userId", data._id))
            .then(() => {
              dispatch(login());
              navigate("/posts")
            });
      console.log(authstate);
    }
  };
  const handleChange = (e) => {
    setInputs((preval) => ({
      ...preval,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper sx={{ width: "40%", pt: 2 }} elevation={1}>
        <form onSubmit={handleSubmit}>
          <Typography
            align="center"
            variant="h4"
            fontWeight="bold"
            letterSpacing="-2px"
          >
            {isSignup ? "Signup" : "Login"}
          </Typography>
          <Box px={3} py={3}>
            {isSignup && (
              <>
                <InputLabel>name</InputLabel>
                <TextField
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  size="medium"
                  margin="normal"
                  fullWidth
                />
              </>
            )}{" "}
            <InputLabel>Email</InputLabel>
            <TextField
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              size="medium"
              margin="normal"
              fullWidth
            />
            <InputLabel>Password</InputLabel>
            <TextField
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              size="medium"
              margin="normal"
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              px={1}
              py={2}
              sx={{ fontSize: "16px", textTransform: "none", mt: 2 }}
              disableElevation
              fullWidth
            >
              {isSignup ? "Signup" : "Login"}
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              variant="outlined"
              px={1}
              py={2}
              sx={{ fontSize: "16px", textTransform: "none", mt: 2 }}
              disableElevation
              fullWidth
            >
              {isSignup ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Auth;

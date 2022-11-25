import React from "react";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navlinks = [
    { path: "/", name: "Home" },
    { path: "/movies", name: "Movies" },
    { path: "/series", name: "Series" },
  ];
  return (
    <AppBar position="absolute" elevation={0} sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <img src={Logo} height="48" />
        <Stack direction={"row"} gap={3} sx={{ ml: 4, mr: "auto" }}>
          {navlinks.map((item, index) => (
            <NavLink
              key={index}
              style={({ isActive }) =>
                isActive
                  ? { color: "white", textUnderlineOffset: "5px",fontWeight:'bold' }
                  : { textDecoration: "none", color: "white" }
              }
              to={item.path}
            >
              <Typography variant="h6" sx={{ letterSpacing: "-1px",fontWeight:'normal' }}>
                {item.name}
              </Typography>
            </NavLink>
          ))}
        </Stack>
        <Box>
          <Typography sx={{ color: "black" }}>User</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

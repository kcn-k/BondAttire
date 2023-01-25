import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* for future implementation of dark mode
      <Box>
        <Typography>Dark mode</Typography>
        <Switch />
      </Box> */}
      <Typography variant="h3">Bond Attire</Typography>
      <Divider sx={{ bgcolor: "primary.light" }} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs>
          <Tab label="Home" sx={{ color: "light.main", m: "0.5px" }} />
          <Tab label="Contact us" sx={{ color: "light.main", m: "0.5px" }} />
          <Tab label="About us" sx={{ color: "light.main", m: "0.5px" }} />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Navbar;

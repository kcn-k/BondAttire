import * as React from "react";
import { Typography, Container, Box } from "@mui/material";

const FooterNav = () => {
  const Copyright = () => (
    <Typography>
      {"Bond Attire ©"} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography>My sticky footer can be found here.</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
export default FooterNav;

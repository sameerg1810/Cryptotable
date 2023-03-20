import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ContactIcon from "@mui/icons-material/ContactSupport";
import InfoIcon from "@mui/icons-material/Info";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CRYPTO BANK
          </Typography>
          <IconButton color="inherit" aria-label="contact">
            <ContactIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="about us">
            <InfoIcon />
          </IconButton>
          <Button color="inherit">Account</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import backgroundImg from "../bgimage.jpg";
import Button from "@mui/material/Button";
import "../App.css";

export default function UserPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [Users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const isThere = Boolean(name) && Boolean(email);

  const handleCancel = () => {
    setIsButtonVisible(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsButtonVisible(true);
    window.scrollTo(0, document.body.scrollHeight);
    const user = { id, name, email };
    console.log(user);
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      header: { "Content-Type": "application/json" },
    }).then(() => {
      console.log("New student added");

      console.log("Button is visible now");
    });
  };

  useEffect(() => {
    fetch("http:/localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        maxWidth="sm"
        sx={{ color: "action.active", my: 5 }}
        elevation={10}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "50vh",
            m: 1,
            width: "30ch",
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            <u>Login</u>
          </Typography>
          <div>
            <Paper
              elevation={3}
              sx={{
                color: "grey",
                m: 1,
              }}
            >
              <Box>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  fullWidth
                  label="User name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="User email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <Button
                  disabled={!isThere}
                  variant="contained"
                  sx={{ m: 1, bgcolor: "green" }}
                  onClick={handleClick}
                >
                  Submit
                </Button>
                <div>
                  {isButtonVisible && (
                    <Button
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        textDecoration: "none",
                        display: isButtonVisible ? "block" : "none",
                        position: "fixed",
                        top: "70%",
                        left: "50%",
                        transform: "translate(-50%, -10%)",
                        zIndex: 9999,
                        m: 1,
                        fontSize: 20,
                      }}
                    >
                      <a href="#">Crypto Wallet</a>
                    </Button>
                  )}

                  {isButtonVisible && (
                    <Button
                      variant="contained"
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        textDecoration: "none",
                        display: isButtonVisible ? "block" : "none",
                        position: "fixed",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -10%)",
                        zIndex: 9999,
                        m: 1,
                        fontSize: 20,
                      }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </FormControl>
              {name}
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  padding: "1rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  width: "fit-content",
                }}
              >
                {email}
              </div>
            </Paper>
          </div>
        </Box>
      </Container>
      <Container> </Container>
    </React.Fragment>
  );
}

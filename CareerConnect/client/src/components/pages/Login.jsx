import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };

  const name = useInputValidation("");
  const email = useInputValidation("");
  const password = useInputValidation("");

  return (
    <div
      style={{
        background: "linear-gradient(lightblue, #0d6efd)",
      }}
    >
      <Container
        component={"main"}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLogin ? (
          <Paper
            elevation={5}
            sx={{
              width: "25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              textAlign: "center",
              borderRadius: "1rem",
            }}
          >
            <form onSubmit={handleLogin} style={{ width: "90%" }}>
              <Stack width={"90%"}>
                <Typography variant="h4">LOGIN</Typography>
                <TextField
                  required
                  label={"Email"}
                  type="email"
                  sx={{ margin: "1rem 0" }}
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  label={"Password"}
                  type="password"
                  sx={{ margin: "1rem 0" }}
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Stack spacing={"0.5rem"}>
                  <Button color="primary" variant="contained">
                    Login
                  </Button>
                  <Typography>OR</Typography>
                  <Button color="secondary" onClick={toggleLogin}>
                    Register INSTEAD
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Paper>
        ) : (
          <Paper
            elevation={5}
            sx={{
              width: "25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              textAlign: "center",
              borderRadius: "1rem",
            }}
          >
            <form onSubmit={handleRegister} style={{ width: "90%" }}>
              <Stack width={"100%"}>
                <Typography variant="h4">REGISTER</Typography>
                <TextField
                  required
                  label={"Name"}
                  sx={{ margin: "1rem 0" }}
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  label={"Profession"}
                  sx={{ margin: "1rem 0" }}
                />
                <TextField
                  required
                  label={"Email"}
                  type="email"
                  sx={{ margin: "1rem 0" }}
                  value={email.value}
                  onChange={email.changeHandler}
                />
                <TextField
                  required
                  label={"Password"}
                  type="password"
                  sx={{ margin: "1rem 0" }}
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Stack spacing={"0.5rem"}>
                  <Button color="primary" variant="contained">
                    REGISTER
                  </Button>
                  <Typography>OR</Typography>
                  <Button color="secondary" onClick={toggleLogin}>
                    LOGIN INSTEAD
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default Login;

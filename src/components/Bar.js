import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Login from "./Login";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Bar = (props) => {
  // const history = useHistory();
  let navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  const signUpHandler = () => {
    navigate("/signup");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          {/* <Link to='/'> */}
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}>
            My Web
          </Typography>
          {/* </Link> */}
          {/* <Link to='/login'> Login</Link> */}
          <Button onClick={loginHandler} color='inherit'>
            Login
          </Button>
          <Button onClick={signUpHandler} color='inherit'>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>

      {/* <Route path='/signup' component={SignupForm} /> */}
      {/* <Route path='/login' component={Login} /> */}
    </Box>
  );
};
export default Bar;

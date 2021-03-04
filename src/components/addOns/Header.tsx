// Imports
// React Imports
import React from "react";
// Material UI Imports
import { IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../asserts/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerBackground: {
    backgroundColor: "white",
  },
  iconShoe: {
    maxWidth: "25pt",
  },
  headerTitle: {
    color: "rgb(0, 81, 255)",
    marginLeft: "20px",
  },
}));

// Header Component
const Header = () => {
  const classes = useStyles();
  //  Header Function Return
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        elevation={1}
        className={classes.headerBackground}
      >
        <Toolbar>
          <IconButton
            edge='start'
            aria-label='Blogistan'
            onClick={() => {
              navigate("/");
            }}
          >
            <img className={classes.iconShoe} src={logo} alt='logo' />
          </IconButton>
          <Typography variant='h4' className={classes.headerTitle}>
            Blogistan
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

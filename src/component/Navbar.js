import React, { useCallback } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuComponent from "./Menu";

const useStyles = makeStyles((theme) => ({
  style: {
    background: 'palegreen',
    height: '60px',
    width: "100%"
  },
  navlinks: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'block',
    color:'white',
    fontSize:'30px',
    fontFamily:'Comic Sans MS',
    "&:hover": {
      background: 'white',
      color:'palegreen',
      borderRadius: '8px',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <AppBar position="static" className={classes.style}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <MenuComponent />
        ) : (
          <nav className={classes.navlinks}>
            <NavLink to="/" className={classes.link} end>
              Home
            </NavLink>
            <NavLink to="/about" className={classes.link}>
              About
            </NavLink>
            <NavLink to="/skill" className={classes.link} end>
              Skill
            </NavLink>
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

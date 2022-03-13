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
import { Link } from "react-router-dom";
import MenuComponent from "./Menu";

const useStyles = makeStyles((theme) => ({
  style: {
    background: 'dimgray',
    height: '60px',
    width: "100%"
  },
  navlinks: {
    paddingLeft: theme.spacing(2),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    paddingLeft: theme.spacing(5),
  },
  button: {
    color: "white",
    fontSize: "20px",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "&:hover": {
      color: 'orange',
      backgroundColor:"white"
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
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              <Button variant="text" className={classes.button}>Home</Button>
            </Link>
            <Link to="/about" className={classes.link}>
              <Button variant="text" className={classes.button}>About</Button>
            </Link>
            <Link to="/skill" className={classes.link}>
              <Button variant="text" className={classes.button}>Skill</Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

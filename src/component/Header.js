import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
} from "@material-ui/core";
import {Link} from "react-router-dom"
import MenuComponent from "./Menu";

const useStyles = makeStyles(() => ({
  style: {
    background: 'palegreen',
    height: '60px',
    width: "100%"
  },
  tab: {
    fontSize:'25px',
    color:'white',
    },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <AppBar position="static" className={classes.style}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <MenuComponent />
        ) : (
          <Tabs value={value} onChange={handleChange} indicatorColor='primary'>
            <Tab label="HOME" className={classes.tab} component={Link} to="/"></Tab>
            <Tab label="ABOUT" className={classes.tab} component={Link} to="/about"></Tab>
            <Tab label="SKILL" className={classes.tab} component={Link} to="/skill"></Tab>
            <Tab label="PRODUCT" className={classes.tab} component={Link} to="/product"></Tab>
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;

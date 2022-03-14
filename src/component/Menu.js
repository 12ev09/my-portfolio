import React from "react";
import {
    IconButton,
    Menu,
    MenuItem,
    makeStyles
} from "@material-ui/core";
import { MenuOutlined, InfoOutlined, HomeOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
    },
    button: {
        margin: '0 0 0 auto'
    },
    menuItem: {
        backgroundColor: 'white',
        fontFamily:'Comic Sans MS',
    }
}));

function MenuComponent() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem className={classes.menuItem}>
                    <HomeOutlined style={{ color: 'red' }}/>
                    &nbsp;&nbsp;
                    <Link to="/" className={classes.link}>Home</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <InfoOutlined style={{ color: 'green' }}/>
                    &nbsp;&nbsp;
                    <Link to="/about" className={classes.link}>About</Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ThumbUpAltOutlined style={{ color: 'blue' }}/>
                    &nbsp;&nbsp;
                    <Link to="/skill" className={classes.link}>Skill</Link>
                </MenuItem >
            </Menu>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 20 }} className={classes.button} >
                <MenuOutlined onClick={handleClick} style={{color:'white'}}/>
            </IconButton>
        </>
    );
}
export default MenuComponent;

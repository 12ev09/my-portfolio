import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { DoubleArrowTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    button: {
        margin:'0 0 0 auto'
    },
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                open={openDrawer}
                anchor='right'
                onClose={() => setOpenDrawer(false)}
                className={classes.drawer}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/skill" className={classes.link}>Skill</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 20 }} className={classes.button} >
                <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
            </IconButton>
        </>
    );
}
export default DrawerComponent;

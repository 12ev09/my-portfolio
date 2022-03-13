import React from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    footer: {
        backgroundColor: "dimgray",
        height: '60px',
        width: "100%",
        bottom: 0,
        paddingTop:'20px',
        textAlign:'center'
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <GitHubIcon
                style={{ color: 'white' }}
                className={classes.icon}
                onClick={() => window.open("https://github.com/12ev09", "_blank")}
            />
        </div>
    )
};

export default Footer;
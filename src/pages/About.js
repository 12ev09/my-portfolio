import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    body: {
        height: '700px'
    }
}))

function About() {
    const classes = useStyle();

    return (
        <div className={classes.body}>
            Here is About page.
        </div>
    )
}

export default About;
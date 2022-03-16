import React from 'react';
import { makeStyles } from '@material-ui/core';
import Profile from '../component/Profile';

const useStyle = makeStyles(() => ({
    body: {
        height:'150vh',
    },
}))

const About = () => {
    const classes = useStyle()
    return (
        <div className={classes.body}>
            <Profile />
        </div>
    )
}

export default About;
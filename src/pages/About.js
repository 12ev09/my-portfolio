import React from 'react';
import { makeStyles } from '@material-ui/core';
import Profile from '../component/Profile';

const useStyle = makeStyles(() => ({
    body: {
        height:'1000px',
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
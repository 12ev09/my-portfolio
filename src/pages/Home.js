import React ,{ useEffect, useRef } from 'react';
import ITyped from 'react-ityped';
import "../assets/home.scss";
import {
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles(() => ({
    body: {
        paddingTop:'300px',
        height:'700px'
    },
    main: {
    margin: "auto",
    fontSize:33,
    fontFamily:'MS Pゴシック',
    textAlign:'center',
  }
}))

function Home() {
    const classes = useStyle();
    return (
        <div className={classes.body}>
            <br ></br>
            <p className={classes.main}> Hello !!</p>
            <p className={classes.main}> This is Takumi's Portforio Page </p> 
        </div>
    );
}

export default Home;
import React from 'react';
import ITyped from 'react-ityped';
import "../assets/home.scss";
import { makeStyles } from '@material-ui/core';
import background from '../img/background.png'

const useStyle = makeStyles(() => ({
    body:{
        margin: "auto",
        paddingTop:'200px',
        paddingBottom:'300px',     
    },
    text:{
        fontSize: 45,
        fontFamily: 'Comic Sans MS',
        textAlign: 'center',
    }
}))

const Chapter = (props) => {
    const classes = useStyle();
    const { text, delay } = props;
    return (
        <ITyped className={classes.main}
            showCursor={false}
            strings={text}
            typeSpeed={50}
            startDelay={delay}
            disableBackTyping={true}
        />
    )
}

function Home() {
    const classes = useStyle();
    return (
        <div className={classes.body}>
            <div className={classes.text}>
                <Chapter text={['Hello!']} delay={1000} />
                <Chapter text={["This is Takumi's Portfolio Page."]} delay={2200} />
            </div>
        </div>
    );
}

export default Home;
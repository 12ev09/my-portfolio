import React  from 'react';
import ITyped from 'react-ityped';
import "../assets/home.scss";
import {makeStyles} from '@material-ui/core';
import background from '../img/background.png'

const useStyle = makeStyles(() => ({
    body: {
        paddingTop:'300px',
        height:'700px',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center-center',
    },
    main: {
    margin: "auto",
    fontSize:50,
    fontFamily:'Comic Sans MS',
    textAlign:'center',
 }
}))

const Chapter = (props) =>{
    const classes = useStyle();
    const {text,delay} = props;
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
        <Chapter  text={['Hello!']} delay={1000}/>
        <Chapter  text={["This is Takumi's Portfolio Page."]} delay={2200}/>
        </div>
    );
}

export default Home;
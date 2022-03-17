import React from "react";
import {
    Grid,
    makeStyles,
} from '@material-ui/core';
import avatar from '../img/avatar.jpg';

const useStyle = makeStyles(() => ({
    body: {
        paddingTop: "20px",
        paddingBottom: '20px',
    },
    container: {
        margin: "0px 40px 0px 40px",
        paddingBottom: "30px"
    },
    card: {
        border: '3px solid black',
        background: 'white',
        borderRadius: '8px',
        merginRight: "auto",
    },
}))

const Profile = () => {
    const classes = useStyle()

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <img
                    src={avatar}
                    alt='avatar'
                    style={{
                        borderRadius: '50%',
                        width: "250px",
                        height: "250px",
                    }}
                />
                <h1>Profile</h1>
                <h2>名前</h2>
                中山　拓実
                <h2>生年月日</h2>
                1999年12月9日
                <h2>所属</h2>
                上智大学理工学部情報理工学科　4年
                <h2>経歴</h2>
                <div style={{fontSize:'10px'}}>
                    2018年4月　上智大学理工学部情報理工学科　入学<br></br>
                    2022年3月　上智大学理工学部情報理工学科　卒業<br></br>
                    2022年4月　上智大学大学院理工学専攻情報学領域　入学(予定)
                </div>
                <h2>趣味</h2>
                <div style={{fontSize:'12px'}}>
                バスケ観戦
                </div>
            </div>
        </div>
    );
}

export default Profile;

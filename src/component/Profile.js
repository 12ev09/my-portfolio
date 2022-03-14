import React from "react";
import {
    Grid,
} from '@material-ui/core';
import avatar from '../img/avatar.jpg';

const Profile = () => {
    return (
        <div>
            <Grid container>
                <Grid
                    item xs={12} sm={6} md={6}
                    style={{
                        paddingLeft: '150px',
                        paddingTop: '50px',
                    }}
                >
                    <img
                        src={avatar}
                        alt='avatar'
                        style={{
                            borderRadius: '50%',
                            width: "250px",
                            height: "250px"
                        }}
                    />
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6}
                    style={{
                        paddingLeft: '50px',
                        paddingTop: '50px',
                    }}
                >
                    <h1>Profile</h1>
                    <h2>名前</h2>
                    <ul style={{
                        listStyle: 'none',
                        fontSize:20
                    }}>
                        中山　拓実
                    </ul>
                    <h2>生年月日</h2>
                    <ul style={{
                        listStyle: 'none',
                        fontSize:20
                    }}>
                        1999年12月9日
                    </ul>
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6}
                    style={{
                        paddingLeft: '50px',
                    }}
                >
                    <h2>所属</h2>
                    <ul style={{
                        listStyle: 'none',
                        fontSize:20
                    }}>
                        上智大学理工学部情報理工学科　4年
                    </ul>
                    <h2>経歴</h2>
                    <ul style={{
                        listStyle: 'none',
                        fontSize:13
                    }}>
                        <li> 2018年4月　上智大学理工学部情報理工学科　入学</li>
                        <li>2022年3月　上智大学理工学部情報理工学科　卒業</li>
                        <li>2022年4月　上智大学大学院理工学専攻情報学領域　入学(予定)</li>
                    </ul>
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6}
                    style={{
                        paddingLeft: '50px',
                    }}
                >
                    <h2>趣味</h2>
                    <ul style={{
                        listStyle: 'none',
                        fontSize:20
                    }}>
                        バスケ観戦
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;

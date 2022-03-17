import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme,
    Grid,
    CardActionArea
} from '@material-ui/core';
import kakeibo from '../img/kakeibo.png';
import portforio from '../img/portforio.png';

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
    grid: {
        paddingTop: "16px"
    },
    img: {
        height: '180px',
        justify: "center",
        paddingTop: "0"
    },
    title: {
        textAlign: 'center',
    },
    line: {
        border: '1px solid black',
    }
}))

const ProductCard = (props) => {
    const { title, img, alt, comment, skill, reflection } = props;
    const classes = useStyle();

    return (
        <Card variant="outlined" className={classes.card} alignItems="center" justify="center">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    style={{height:200}}
                    title={alt + "image"}
                />
                <CardContent>
                    <Typography className={classes.title}>{title}</Typography>
                    <hr className={classes.line}></hr>
                    <br></br>
                    <Typography variant="body2" className={classes.explation}>{comment}</Typography>
                    <br></br>
                    <Typography variant="body2" className={classes.explation}>
                        使用している技術:
                        <br></br>
                        {skill}
                    </Typography>
                    <br></br>
                    <Typography variant="body2" className={classes.explation}>
                        反省点:
                        <br></br>
                        {reflection}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const products = [
    {
        title: "LINE botで使える家計簿アプリ",
        img: kakeibo,
        alt: "家計簿アプリ",
        comment: "LINE上の入力をスプレッドシートに記録することに加えて、月々の出費を出費のカテゴリ、支払い方法ごとに集計できる。",
        skill: "Python(Flask)、line-bot-sdk-python、GCP(SpreadSheet)、Heroku",
        reflection: "対話型の実装が難しくて断念してしまった。対話型の実装ができれば、ユーザーの入力がより簡単になる。",
    },
    {
        title: "ポートフォリオサイト",
        img: portforio,
        alt: "ポートフォリオ",
        comment: "Reactの練習兼、自己紹介のために作成。今後に増えるProductやSkillのカードは既存の配列に書き足すことで容易に追加できるため編集がしやすい",
        skill: "JavaScript(React)、material-ui、react-router-dom、react-slider-dom、react-ityped",
        reflection: "CSSの知識が特に足りていなく、ブラウザのサイズの変化に完璧に対応できていなかった。また、連絡用のフォームやBlogを追加したい",
    },
];

const Products = () => {
    const classes = useStyle();

    const getCardContent = (getObj) => {
        return (
            <Grid item xs={12} md={6} className={classes.grid}>
                <ProductCard {...getObj} />
            </Grid>
        );
    };

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <Grid container spacing={4} justfy="center">
                    {products.map((contentObj) => getCardContent(contentObj))}
                </Grid>
            </div>
        </div>
    );
}

export default Products;

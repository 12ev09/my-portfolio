import React from "react";
import {
    Card,
    CardContent,
    makeStyles,
    Typography,
    Grid
} from '@material-ui/core';

const useStyle = makeStyles(() => ({
    body: {
        background: 'white',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '35px',
    },
    card: {
        border: '3px solid black',
        background: 'white',
        borderRadius: '8px',
        width: '400px',
        height: '700px',
    },
    grid: {
        margin: "auto",
    },
    img: {
        height: "300px",
        width: '400px',
        objectFit: 'cover',
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
    },
    line: {
        border: '1px solid black',
    }
}))

const ProductCard = (props) => {
    const { title, img,alt, comment, skill, reflection } = props;
    const classes = useStyle();

    return (
        <Card variant="outlined" className={classes.card} alignItems="center" justify="center">
            <img className={classes.img} src={img} alt={alt}/>
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
        </Card>
    );
}

const products = [
    {
        title: "LINE botで使える家計簿アプリ",
        img: "/static/images/products/kakeibo.png",
        alt:"家計簿アプリ",
        comment: "LINE上の入力をスプレッドシートに記録することに加えて、月々の出費を出費のカテゴリ、支払い方法ごとに集計できる。",
        skill: "Python(Flask)、line-bot-sdk-python、GCP(SpreadSheet)、Heroku",
        reflection: "対話型の実装が難しくて断念してしまった。対話型の実装ができれば、ユーザーの入力がより簡単になる。",
    },
    {
        title: "ポートフォリオサイト",
        img: "/static/images/products/portforio.png",
        alt:"ポートフォリオ",
        comment: "Reactの練習兼、自己紹介のために作成。今後に増えるProductやSkillのカードは既存の配列に書き足すことで容易に追加できるため編集がしやすい",
        skill: "JavaScript(React)、material-ui、react-router-dom、react-slider-dom、react-ityped",
        reflection: "CSSの知識が特に足りていなく、ブラウザのサイズの変化に完璧に対応できていなかった。また、連絡用のフォームやBlogを追加したい",
    },
];

const Products = ()=> {
    const classes = useStyle();

    const getCardContent = (getObj) => {
        return (
            <Grid item xs={12} sm={8} md={6} className={classes.grid}>
                <ProductCard {...getObj} />
            </Grid>
        );
    };

    return (
        <div className={classes.body}>
            <Grid container spacing={4} alignItems="center">
                {products.map((contentObj) => getCardContent(contentObj))}
            </Grid>
        </div>
    );
}

export default Products;

import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import "../assets/skill.scss";

const useStyles = makeStyles({
  card: {
    border:'3px solid black',
    background:'white',
    borderRadius: '8px',
    width: '300px',
    height: '350px',
    merginRight:'auto',
    "&:hover": {
      background: 'whitesmoke',
    },
  },
  title: {
    fontSize: 20,
    fontFamily:'Comic Sans MS',
    textAlign:'center'
  },
  star:{
    paddingLeft:'70px',
  },
  explation:{
    fontSize:15,
  }
});

const SkillCard = (props)=> {
  const { title, icon, star, comment,history } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card} alignItems="center" justify="center">
      <CardContent>
        <p className={icon+" skillIcon"}></p>
        <Typography className={classes.title}>
          {title}
        </Typography>
        <hr />
        <Rating readOnly value={star} className={classes.star}/>
        <Typography variant="body2" className={classes.explation}>{comment}</Typography>
        <hr />
        <Typography variant="body2" className={classes.explation}>使用歴:{history}</Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;


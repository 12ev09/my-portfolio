import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Autocomplete } from "@material-ui/lab";
import "../assets/skill.scss";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 400,
    mergin: Autocomplete,
  },
  media: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
  },
});

function SkillCard(props) {
  const { title, icon, star, comment,history } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card} alignItems="center" justify="center">
      <CardContent>
        <p className={icon+" skillIcon"}></p>
        <Typography className={classes.title} variant="body2">
          {title}
        </Typography>
        <hr />
        <Rating readOnly value={star} />
        <Typography variant="body2">{comment}</Typography>
        <hr />
        <Typography variant="body3">使用歴:{history}</Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;


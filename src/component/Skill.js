import React from "react";
import {
  Grid, 
  makeStyles,
} from '@material-ui/core';
import SkillCard from "./SkillCard";

const useStyle = makeStyles(()=>({
  grid:{
    margin: "auto",
  }
}))

const skills = [
  {
    title: "Go",
    icon: "devicon-go-plain colored",
    star: 3,
    comment: "卒業研究におけるバックエンド開発で使用. ginを用いてREST APIを構築した．",
    history: "10ヶ月"
  },
  {
    title: "Python",
    icon: "devicon-python-plain colored",
    star: 3,
    comment: "競技プログラミングにおけるメイン言語. Flaskを用いてLINEbotを使った家計簿アプリを制作.",
    history: "1年10ヶ月"
  },
  {
    title: "Java",
    icon: "devicon-java-plain colored",
    star: 2,
    comment: "大学の講義で使用．ほぼ覚えていない．",
    history: "null"
  },
  {
    title: "C",
    icon: "devicon-c-plain colored",
    star: 2,
    comment: "大学の講義で使用．",
    history: "null",
  },
  {
    title: "JavaScript",
    icon: "devicon-javascript-plain colored",
    star: 1,
    comment: "本ポートフォリオをReactを用いて作成．",
    history: "2ヶ月"
  },
];

function Skills() {
  const classes = useStyle();

  const getCardContent = (getObj) => {
    return (
      <Grid item xs={12} md={4} className={classes.grid}>
        <SkillCard {...getObj} />
      </Grid>
    );
  };

  return (
    <div>
      <br></br>
      <Grid container spacing={4} alignItems="center">
        {skills.map((contentObj) => getCardContent(contentObj))}
      </Grid>
    </div>
  );
}

export default Skills;

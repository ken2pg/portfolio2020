import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '30px',
    fontSize: '48px',
    ['@media(max-width:1024px)']: {
      fontSize: '44px',
    },
  },
  text: {
    width: '700px',
    margin: '0 auto',
    fontSize: '20px',
    display: 'flex',
    // justifyContent: 'center',
    marginBottom: '30px',

    ['@media(max-width:1024px)']: {
      width: '95%',
      fontSize: '20px',
    },
  },
  text2: {
    width: '700px',
    margin: '0 auto',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    ['@media(max-width:1024px)']: {
      width: '95%',
      fontSize: '20px',
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>About</Typography>
      <Typography className={classes.text}>名前：けんと</Typography>
      <Typography className={classes.text}>職業：情報科学系の大学院　修士1年</Typography>
      <Typography className={classes.text}>研究：深層学習、行動認識</Typography>
      <Typography className={classes.text}>
        趣味：webアプリ開発、イラスト、音楽、最近は筋トレ
      </Typography>
      <Typography className={classes.text}>
        Github：
        <Link href="https://github.com/ken2pg">Githubページ</Link>
      </Typography>
      <br />
      <br />
      <Typography className={classes.text}>インターン経験：</Typography>
      <Typography className={classes.text}>
        株式会社いい生活　 サマーインターン(有給) 2020/08
      </Typography>
      <Typography className={classes.text2}>
        Vuejsと会社のAPIを用いてチームで不動産サイトを開発しました。
        webエンジニアの業務もチーム開発な為、
        チームでの開発の進め方を経験することで仕事の理解が深まるのではないかと思ったためです。
        インターンを通して、要件設計の仕方やチームでのgitを使った開発、
        ペアプロなど貴重な経験することができました。
        またチームで問題点(自分が躓いている部分など)の共有を行い、
        相談したり意見交換をすることがチーム開発の良さであること知り、チーム内で情報を共有することの大切さを学びました。
      </Typography>
    </div>
  );
};

export default About;

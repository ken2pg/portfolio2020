import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '1000px',
    borderBottom: '1px solid gray',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '30px',
    fontSize: '48px',
  },
  text: {
    // width: '50%',
    margin: '0 auto',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  text2: {
    width: '700px',
    margin: '0 auto',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>About</Typography>
      <Typography className={classes.text}>名前：けんと</Typography>
      <Typography className={classes.text}>職業：情報科学系の大学院　修士1年</Typography>
      <Typography className={classes.text}>
        趣味：webアプリ開発、イラスト、音楽、最近は筋トレ
      </Typography>
      <Typography className={classes.text}>
        Github：
        <Link href="https://github.com/ken2pg">https://github.com/ken2pg</Link>
      </Typography>
      <br />
      <br />
      <Typography className={classes.text}>インターン経験：</Typography>
      <Typography className={classes.text}>
        インターン：株式会社いい生活　 サマーインターン(有給) 2020/08
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

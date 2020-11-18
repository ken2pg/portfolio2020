import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'left',
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '48px',
    color: '',
    borderBottom: '3px solid black',
    width: '700px',
    margin: '0 auto',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
  },
  contents: {
    marginBottom: '80px',
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'left',
    width: '700px',
    margin: '0 auto',
    fontSize: '28px',
    marginBottom: '40px',
    fontWeight: 'bold',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
  },
  text: {
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },

  ExperienceTitle: {
    width: '700px',
    margin: '0 auto',
    fontSize: '22px',
    display: 'flex',
    marginBottom: '10px',
    fontWeight: 'bold',
    ['@media(max-width:1024px)']: {
      width: '90%',
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
    lineHeight: '50px',

    ['@media(max-width:1024px)']: {
      width: '90%',
      fontSize: '18px',
    },
  },
  grid: {
    width: '720px',
    wordWrap: 'break-word',

    ['@media(max-width:1024px)']: {
      width: '93%',
    },

    margin: '0 auto',
  },
  gridItem: {
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
  gridItem2: {
    textAlign: 'left',
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
}));
const contents = [
  { type: '名前', text: 'けんと' },
  { type: '職業', text: '情報科学系の大学院　修士1年' },
  { type: '研究', text: '深層学習、行動認識' },
  { type: '趣味', text: 'webアプリ開発、イラスト、音楽、最近は筋トレ' },
];

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.contents}>
        <Typography className={classes.title}>About</Typography>
        <Typography className={classes.subtitle}>自己紹介</Typography>

        <Grid className={classes.grid} container spacing={3}>
          {contents.map((content) => {
            return (
              <>
                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.text}>
                    {content.type}：{content.text}
                  </Typography>
                </Grid>
                {/* <Grid item xs={6} className={classes.gridItem2}>
                  <Typography className={classes.text}></Typography>
                </Grid>
                <Grid item xs={4} className={classes.gridItem2}></Grid> */}
              </>
            );
          })}
          <>
            <Grid item xs={12} className={classes.gridItem}>
              Github：
              <Link underline="none" href="https://github.com/ken2pg">
                Githubページ
              </Link>
            </Grid>
            {/* <Grid item xs={6} className={classes.gridItem2}>
              <Link underline="none" href="https://github.com/ken2pg">
                Githubページ
              </Link>
            </Grid>
            <Grid item xs={4} className={classes.gridItem2}></Grid> */}
          </>
        </Grid>
      </div>
      <div className={classes.contents}>
        <Typography className={classes.subtitle}>インターン経験</Typography>
        <Typography className={classes.ExperienceTitle}>
          株式会社いい生活　 サマーインターン(有給) 2020/08
        </Typography>
        <Typography className={classes.text2}>
          Vuejsと会社のAPIを用いてチームで不動産サイトを開発しました。
          webエンジニアの業務もチーム開発な為、
          チームでの開発の進め方を経験することで仕事の理解が深まるのではないかと思ったため参加しました。
          インターンを通して、要件設計の仕方やチームでのgitを使った開発、
          ペアプロなど貴重な経験することができました。
          またチームで問題点(自分が躓いている部分など)の共有を行い、
          相談したり意見交換をすることがチーム開発の良さであること知り、チーム内で情報を共有することの大切さを学びました。
        </Typography>
      </div>
    </div>
  );
};

export default About;

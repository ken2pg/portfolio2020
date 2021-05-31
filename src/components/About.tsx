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
  { type: '名前', text: 'ken2' },
  { type: '職業', text: '情報科学系の大学院　修士1年' },
  { type: '研究キーワード', text: '人工知能　機械学習　深層学習、行動認識' },
  { type: '趣味', text: 'プログラミング、イラスト、音楽、最近は筋トレ' },
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
          </>
        </Grid>
      </div>
      <div className={classes.contents}>
        <Typography className={classes.subtitle}>研究</Typography>
        <Typography className={classes.ExperienceTitle}>深層学習を用いた行動認識</Typography>
        <Typography className={classes.text2}>
          私の研究テーマは深層学習と呼ばれる人工知能分野の１技術と骨格データと呼ばれる人間の骨格の位置を表すデータを利用した、「人間の行動を認識させるモデル」の研究しております。
        </Typography>
      </div>
      <div className={classes.contents}>
        <Typography className={classes.subtitle}>インターン経験</Typography>
        <Typography className={classes.ExperienceTitle}>
          株式会社いい生活　 サマーインターン(有給) 2020/08
        </Typography>
        <Typography className={classes.text2}>
          私含め様々な大学の学生4人で、1週間という期間で住宅物件サイトを開発しました。
          インターンに参加した動機は、webエンジニアに興味があり、チームでの開発の進め方を経験することで仕事の理解が深まるのではないかと思ったため参加しました。
          具体的には、「大学生の為の住宅物件検索サイト」をVue.jsと呼ばれるJavascriptライブラリと会社のAPIを用いて開発を行いました。
          1週間という短い期間で完成させることに大変苦労しましたが、チームで困ったこと・躓いている部分がないかを確認し、
          私が知っている領域であれば教えたり、分からない部分に関しては他の人に協力をお願いしたりして、取り組むことで問題を解決していきました。
          結果、最終的には1週間で完成させることが出来ました。
        </Typography>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

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
  },
  grid: {
    width: '70%',
    margin: '0 auto',
    ['@media(max-width:1024px)']: {
      width: '95%',
    },
    ['@media(max-width:768px)']: {
      display: 'none',
    },
  },
  grid2: {
    width: '95%',
    margin: '0 auto',
    display: 'none',
    ['@media(max-width:768px)']: {
      display: 'inline-block',
    },
  },
  gridItem: {
    fontSize: '20px',
  },
  content: {
    fontSize: '16px',
  },
  label: {
    width: '100%',
    marginLeft: '-10px',
  },
  label2: {
    // fontFamily: 'Helvetica',
    fontSize: '16px',
    margin: '10px 10px',
  },
}));
const Works = () => {
  const classes = useStyles();
  const works = [
    {
      name: 'BookMark App',
      label: [
        'TypeScript',
        'React(React Hook)',
        'Redux(Redux Toolkit)',
        'Nextjs',
        'CloudFireStore(Firebase)',
        'Vercel(hosting)',
        'Adobe XD',
      ],
      detail: (
        <>
          メモ機能がついたオンラインブックマークアプリを作成しました。
          <br />
          <br />{' '}
          作成した理由としては、PCだけでなくスマホでも使いたかったからのと、重要な部分などをメモを残したかったからです。
          <br />
          <br />
          こだわった部分としては、メモ機能にマーダウン記法を適応できるようにしました。
          <br />
          私自身、よくプログラミングサイト(Qiitaやstack overflowなど)によくお世話になるので、
          重要なコードをメモしておきたいと思ったため追加しました。
        </>
      ),
    },
    {
      name: '物件検索サイト Patimo',
      label: ['JavaScript', 'Vue.js', 'Vuetify', '物件検索Api', 'Firebase(hosting)', 'Figuma'],
      detail: (
        <>
          物件探しが初めての大学生向けの物件検索サイトを4人のチーム（インターン）で、Vue.jsや会社の物件API
          を用いて作成しました。
          <br />
          <br /> 地方から東京に引っ越してきた大学生が簡単に調べられるようなサイトをテーマにし、
          以下の機能をチームで作りました。
          <br />
          <br />
          ・簡単検索機能
          <br />
          <br />
          ・地域での検索
          <br />
          <br />
          ・検索結果画面/詳細検索
          <br />
          <br />
          ・物件詳細
          <br />
          <br />
          私は、検索結果画面/詳細検索とクエリの受け取り部分の実装を担当しました。
          <br />
          Vuetifyを使うのが初めてだったので、CSSやクエリやAPIの使い方に苦戦しましたが、
          チームの人やメンター相談しながら最終的には完成させることができました。
        </>
      ),
    },
  ];
  return (
    <div className={classes.root} id="works">
      <Typography className={classes.title}>Works</Typography>
      <Grid className={classes.grid} container spacing={3}>
        {works.map((work) => {
          return (
            <Grid item xs={6} className={classes.gridItem}>
              <Card>
                <CardHeader title={work.name}></CardHeader>
                <CardContent className={classes.content}>
                  <Typography>{work.detail}</Typography>
                  <br />
                  使用技術：
                  <br />
                  <br />
                  <div className={classes.label}>
                    {work.label.map((value) => {
                      return <Chip label={value} className={classes.label2} />;
                    })}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid className={classes.grid2} container spacing={3}>
        {works.map((work) => {
          return (
            <Grid item xs={12} className={classes.gridItem}>
              <Card>
                <CardHeader title={work.name}></CardHeader>
                <CardContent className={classes.content}>
                  <Typography>{work.detail}</Typography>
                  <br />
                  使用技術：
                  <br />
                  <br />
                  <div className={classes.label}>
                    {work.label.map((value) => {
                      return <Chip label={value} className={classes.label2} />;
                    })}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Works;

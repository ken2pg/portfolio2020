import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Grid,
  MobileStepper,
  Typography,
  Link,
} from '@material-ui/core';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'left',
    marginTop: '50px',
    marginBottom: '30px',
    fontSize: '48px',
    borderBottom: '3px solid black',
    width: '700px',
    margin: '0 auto',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
  },
  grid: {
    width: '730px',
    margin: '0 auto',
    ['@media(max-width:1024px)']: {
      display: 'none',
    },
  },
  grid2: {
    width: '96%',
    display: 'none',
    ['@media(max-width:1024px)']: {
      display: 'block',
      margin: '0 auto',
    },
  },
  gridItem: {
    fontSize: '20px',
  },
  card: {
    margin: '0 auto',
  },
  content: {
    fontSize: '18px',
  },
  label: {
    width: '100%',
    marginLeft: '-10px',
  },
  label2: {
    fontSize: '16px',
    margin: '10px 10px',
  },
  img: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    backfaceVisibility: 'hidden',
  },
}));
const Works = () => {
  const classes = useStyles();
  const theme = useTheme();
  const works = [
    {
      name: 'BookMark App',
      label: [
        'TypeScript',
        'React(React Hook)',
        'Redux(Redux Toolkit)',
        'Next.js',
        'CloudFireStore(Firebase)',
        'Vercel(hosting)',
        'Adobe XD',
      ],
      imgList: [
        '/static/img1.png',
        '/static/img2.png',
        '/static/img3.png',
        '/static/img6.png',
        '/static/img7.png',
        '/static/img4.png',
        '/static/img5.png',
      ],
      detail: (
        <>
          メモ機能がついたオンラインブックマークアプリを作成しました。
          <br />
          <br />{' '}
          作成した理由としては、私がPCだけでなくスマホでも使いたかったからのと、重要な部分などをメモを残したかったからです。
          <br />
          <br />
          こだわった部分としては、メモ機能にマーダウン記法を適応できるようにしました。
          <br />
          私自身、よくプログラミングサイト(Qiitaやstack overflowなど)によくお世話になるので、
          重要なコードをメモしておきたいと思ったため追加しました。
          {/* <br />
          <br /> */}
          {/* 以下のメールアドレスとパスワードでログインできます。
          <br />
          <br />
          test@gmail.com
          <br />
          <br />
          abc123EFG456
          <br />
          <br /> */}
          {/* <Link href="https://book-mark-app.vercel.app">BookMarkAppサイト</Link> */}
          <br />
          <br />
          コード公開：
          <Link underline="none" href="https://github.com/ken2pg/BookMark-App">
            Github
          </Link>
        </>
      ),
    },
    {
      name: '物件検索サイト Patimo',
      label: ['JavaScript', 'Vue.js', 'Vuetify', '物件検索Api', 'Firebase(hosting)', 'Figuma'],
      imgList: [],
      detail: (
        <>
          物件探しが初めての大学生向けの物件検索サイトを4人のチーム（インターン）で、Vue.jsや会社の物件API
          を用いて作成しました。
          <br />
          <br /> 地方から東京に引っ越してきた大学生が簡単に調べられるようなサイトをテーマにし、
          以下の機能をチームで作りました。
          <br />
          <br />
          ・簡単検索機能(大学の場所や通学方法、家賃の希望額を元に検索)
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
          私は、検索結果画面/詳細検索と検索条件クエリの受け取り部分の実装を担当しました。
          <br />
          ※APIが会社の物であり守秘義務のため、コードと写真は公開しておりません。
        </>
      ),
    },
  ];

  return (
    <div className={classes.root} id="works">
      <Typography className={classes.title}>Works</Typography>
      <Grid className={classes.grid} container spacing={3}>
        {works.map((work) => {
          const [step, setStep] = React.useState(0);
          const handleNext = () => {
            setStep((preStep) => preStep + 1);
          };

          const handleBack = () => {
            setStep((preStep) => preStep - 1);
          };
          return (
            <Grid item xs={12} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardHeader title={work.name}></CardHeader>
                <img className={classes.img} src={work.imgList[step]} />
                {work.imgList.length != 0 && (
                  <MobileStepper
                    steps={work.imgList.length}
                    position="static"
                    variant="dots"
                    activeStep={step}
                    nextButton={
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={handleNext}
                        disabled={step === work.imgList.length - 1}
                      >
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={handleBack}
                        disabled={step === 0}
                      >
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                )}
                <CardContent className={classes.content}>
                  <Typography className={classes.content}>{work.detail}</Typography>
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
          const [step, setStep] = React.useState(0);
          const handleNext = () => {
            setStep((preStep) => preStep + 1);
          };

          const handleBack = () => {
            setStep((preStep) => preStep - 1);
          };
          return (
            <Grid item xs={12} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardHeader title={work.name}></CardHeader>
                <img className={classes.img} src={work.imgList[step]} />
                {work.imgList.length != 0 && (
                  <MobileStepper
                    steps={work.imgList.length}
                    position="static"
                    variant="dots"
                    activeStep={step}
                    nextButton={
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={handleNext}
                        disabled={step === work.imgList.length - 1}
                      >
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={handleBack}
                        disabled={step === 0}
                      >
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
                )}

                <CardContent className={classes.content}>
                  <Typography className={classes.content}>{work.detail}</Typography>
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

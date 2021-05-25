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
        'React Hooks',
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
          作成した動機は、URLと一緒にそのページの重要な部分やコード等、メモを残したかった為です。
          私自身、よくプログラミングサイト(Qiitaやstack overflowなど)にお世話になるので、
          重要なコードをメモしておきたいと思い追加しました。
          <br />
          <br />
          工夫点は、
          <br />
          <br />
          ・レスポンシブ対応にスマホとタブレット、PCで使用できるようにしました。
          <br />
          <br />
          ・ファビコンAPIを使用し、どのサイトのURLなのか分かりやすくしました。
          <br />
          <br />
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
      label: [
        'JavaScript',
        'Vue.js',
        'Vuetify',
        '会社の物件検索Api',
        'Firebase(hosting)',
        'Figuma',
      ],
      imgList: [],
      detail: (
        <>
          1週間のインターンで、物件探しが初めての大学生向けの物件検索サイトを様々な大学の学生4人で開発しました。
          <br />
          <br />
          以下の機能を開発しました。
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
          工夫したところは、
          <br />
          <br />
          ・FigumaでUIや状態遷移図を設計
          <br />
          <br />
          ・コンポネント毎に役割分担することでコンフリクトを回避
          <br />
          <br />
          ・ページの動的遷移で使用するパラメータをあらかじめ選定しました。
          <br />
          <br />
          <br />
          ※APIが会社の物であり守秘義務のため、コードと写真は公開しておりません。
        </>
      ),
    },
    {
      name: 'QAサイト',
      label: ['Django', 'MySQL', 'bootstrap', 'AdobeXD'],
      imgList: [],
      detail: (
        <>
          大学の授業で、生徒が教師・TA(Teaching Assistant)に質問できるサイトを9人で開発。
          <br />
          <br />
          機能は以下の通りです。
          <br />
          <br />
          ・ログイン、ユーザー登録
          <br />
          <br />
          ・質問作成、編集、削除
          <br />
          <br />
          ・質問に対する回答の作成
          <br />
          <br />
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

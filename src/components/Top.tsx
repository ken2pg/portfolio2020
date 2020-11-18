import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    background: '#e3f2fd',
  },
  title: {
    display: 'flex',
    paddingTop: '300px',
    paddingBottom: '20px',
    justifyContent: 'center',
    fontSize: '60px',
    color: '#1769aa',
    fontWeight: 'bold',
    textAlign: 'center',
    ['@media(max-width:1024px)']: {
      fontSize: '40px',
      textAlign: 'center',
    },
  },
  detail: {
    color: '#1769aa',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '50%',
    margin: '0 auto',
    paddingBottom: '320px',
    ['@media(max-width:1024px)']: {
      width: '90%',
      fontSize: '16px',
    },
  },
}));

const Top = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="top">
      <Typography className={classes.title}>Kento's Portfolio Site.</Typography>
      <Typography className={classes.detail}>
        このサイトはけんとの自己紹介や参加したインターン、 スキル(プログラミング言語)、
        制作物について 説明しているサイトです。
      </Typography>
    </div>
  );
};

export default Top;

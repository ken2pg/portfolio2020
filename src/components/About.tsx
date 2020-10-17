import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '500px',
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
}));
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>About</Typography>
      <Typography className={classes.text}>名前：けんと</Typography>
      <Typography className={classes.text}>職業：情報科学系の大学院生　修士1年</Typography>
      <Typography className={classes.text}>趣味：webアプリ開発、イラスト、筋トレ</Typography>
      <Typography className={classes.text}>
        Github：
        <Link href="https://github.com/ken2pg">https://github.com/ken2pg</Link>
      </Typography>
    </div>
  );
};

export default About;

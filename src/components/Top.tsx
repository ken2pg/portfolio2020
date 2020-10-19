import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// const Image = '/static/img1.png';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    background: '#e3f2fd',
    // '#e3f2fd' &&
    // '-webkit-linear-gradient(to top, #e3f2fd, #ffffff)' &&
    // 'linear-gradient(to top,#e3f2fd, #ffffff)',
  },
  title: {
    display: 'flex',
    padding: '190px 0',
    justifyContent: 'center',
    // lineHeight: '500px',
    fontSize: '48px',
    color: '#1769aa',
    fontWeight: 'bold',
    textAlign: 'center',
    ['@media(max-width:1024px)']: {
      width: '95%',
      fontSize: '40px',
      textAlign: 'center',
    },
  },
}));
const Top = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="top">
      <Typography className={classes.title}>Kento's Portfolio Site.</Typography>
    </div>
  );
};

export default Top;

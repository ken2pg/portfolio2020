import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// const Image = '/static/img1.png';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    // borderBottom: '1px solid gray',
    // backgroundImage: `url(${Image})`,
    // backgroundSize: '100% 100%',
    // ['@media(max-width:1024px)']: {
    //   height: '300px',
    // },
  },
  title: {
    display: 'flex',
    margin: '190px 0',
    justifyContent: 'center',
    // lineHeight: '500px',
    fontSize: '48px',
    // color: 'White',
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
      <Typography className={classes.title}>Kento's Portfolio Site</Typography>
    </div>
  );
};

export default Top;

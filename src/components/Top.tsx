import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '300px',
    borderBottom: '1px solid gray',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '190px',
    fontSize: '48px',
  },
}));
const Top = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Ken2's Portfolio Site in 2020.</Typography>
    </div>
  );
};

export default Top;

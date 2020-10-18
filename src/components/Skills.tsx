import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, Grid, Paper, Typography } from '@material-ui/core';

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
    ['@media(max-width:1024px)']: {
      fontSize: '44px',
    },
  },
  grid: {
    width: '700px',
    ['@media(max-width:1024px)']: {
      width: '95%',
    },
    ['@media(max-width:768px)']: {
      display: 'none',
    },
    margin: '0 auto',
  },
  grid2: {
    width: '95%',
    display: 'none',
    ['@media(max-width:1024px)']: {
      width: '95%',
    },
    ['@media(max-width:768px)']: {
      display: 'inline-block',
      margin: '0 auto',
    },
    margin: '0 auto',
  },
  gridItem: {
    fontSize: '20px',
  },
}));
const Skills = () => {
  const classes = useStyles();
  const skills = [
    { name: 'JavaScript', period: '7ヵ月' },
    { name: 'TypeScript', period: '半年' },
    { name: 'React', period: '6ヵ月' },
    { name: 'Vue', period: '1ヵ月' },
    { name: 'Redux(Redux toolkit)', period: '5ヵ月' },
    { name: 'NextJs', period: '2ヵ月' },
    { name: 'Firebase', period: '' },
    { name: 'Python', period: '2年' },
    { name: 'Git/Github', period: '' },
  ];
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Skills</Typography>
      <Grid className={classes.grid} container spacing={3}>
        {skills.map((skill) => {
          return (
            <Grid item xs={6} className={classes.gridItem}>
              ・{skill.name}　{skill.period}
            </Grid>
          );
        })}
      </Grid>
      <Grid className={classes.grid2} container spacing={3}>
        {skills.map((skill) => {
          return (
            <Grid item xs={12} className={classes.gridItem}>
              ・{skill.name}　{skill.period}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Skills;

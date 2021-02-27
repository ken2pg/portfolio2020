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
    width: '700px',
    wordWrap: 'break-word',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
    ['@media(max-width:768px)']: {
      display: 'none',
    },
    margin: '0 auto',
  },
  grid2: {
    width: '90%',
    display: 'none',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
    ['@media(max-width:768px)']: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '0 auto',
    },
  },
  grid3: {
    width: '70%',
    marginRight: 'auto',
    ['@media(max-width:540px)']: {
      width: '100%',
      marginRight: '0',
    },
  },
  gridItem: {
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
  gridItem2: {
    textAlign: 'right',
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
  gridItem3: {
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
  gridItem4: {
    textAlign: 'left',
    fontSize: '20px',
    ['@media(max-width:1024px)']: {
      fontSize: '18px',
    },
  },
}));
const Skills = () => {
  const classes = useStyles();
  const skills = [
    { name: 'JavaScript', period: '2ヵ月' },
    { name: 'TypeScript', period: '9ヵ月' },
    { name: 'React', period: '9ヵ月' },
    { name: 'Vue.js', period: '1ヵ月' },
    { name: 'Redux', period: '6ヵ月' },
    { name: 'Next.js', period: '2ヵ月' },
    { name: 'PHP', period: '1ヵ月' },
    { name: 'Firebase', period: '4ヵ月' },
    { name: 'Python', period: '2年半' },
    { name: 'Git/Github', period: '11ヵ月' },
  ];
  return (
    <div className={classes.root} id="skills">
      <Typography className={classes.title}>Skills</Typography>
      <Grid className={classes.grid} container spacing={3}>
        {skills.map((skill) => {
          return (
            <>
              <Grid item xs={3} className={classes.gridItem}>
                ・{skill.name}
              </Grid>
              <Grid item xs={3} className={classes.gridItem2}>
                {skill.period}
              </Grid>
            </>
          );
        })}
      </Grid>
      <div className={classes.grid2}>
        <Grid className={classes.grid3} container spacing={3}>
          {skills.map((skill) => {
            return (
              <>
                <Grid item xs={6} className={classes.gridItem3}>
                  ・{skill.name}
                </Grid>
                <Grid item xs={6} className={classes.gridItem4}>
                  　{skill.period}
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;

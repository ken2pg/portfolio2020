import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, Grid, Paper, Typography } from '@material-ui/core';

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
  grid: {
    width: '50%',
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
    </div>
  );
};

export default Skills;

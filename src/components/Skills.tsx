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
  text: {
    display: 'flex',
    justifyContent: 'left',
    width: '700px',
    margin: '0 auto',
    fontSize: '28px',
    marginBottom: '40px',
    fontWeight: 'bold',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
  },
  text2: {
    display: 'flex',
    justifyContent: 'left',
    width: '700px',
    margin: '0 auto',
    fontSize: '24px',
    marginBottom: '40px',
    fontWeight: 'bold',
    ['@media(max-width:1024px)']: {
      width: '90%',
    },
  },

  grid: {
    width: '724px',
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
  const skills_python = [
    { name: 'Python', period: '3年' },
    { name: 'Pytorch', period: '半年' },
    { name: 'Keras', period: '半年' },
    { name: 'Django', period: '2ヵ月' },
  ];

  const skills_javascript = [
    { name: 'JavaScript', period: '2ヵ月' },
    { name: 'TypeScript', period: '1年' },
    { name: 'React', period: '1年' },
    { name: 'Vue.js', period: '1ヵ月' },
    { name: 'Redux', period: '半年' },
    { name: 'Next.js', period: '2ヵ月' },
  ];
  const skills_other_lang = [
    { name: 'Java', period: '1年' },
    { name: 'Haskell', period: '半年' },
  ];
  const other = [
    { name: 'Firebase', period: '4ヵ月' },
    { name: 'AWS Amplify', period: '1ヵ月未満' },
    { name: 'AWS Cognite', period: '1ヵ月未満' },
    { name: 'AWS AppSync', period: '1ヵ月未満' },
    { name: 'Git/Github', period: '1年' },
  ];

  const list_lang = (skills: { name: string; period: string }[], subTitle: string) => {
    return (
      <>
        <Typography className={classes.text2}>{subTitle}</Typography>
        <Grid className={classes.grid} container spacing={3}>
          {skills.map((skill) => {
            return (
              <>
                <Grid item xs={3} className={classes.gridItem}>
                  {skill.name}
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
                    {skill.name}
                  </Grid>
                  <Grid item xs={6} className={classes.gridItem4}>
                    　{skill.period}
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
        <br />
        <br />
        <br />
      </>
    );
  };
  return (
    <div className={classes.root} id="skills">
      <Typography className={classes.title}>Skills</Typography>
      <Typography className={classes.text}>使用したことがある言語・ライブラリ等</Typography>
      {list_lang(skills_python, ' python関連')}
      {list_lang(skills_javascript, ' Javascript関連')}
      {list_lang(skills_other_lang, ' その他の言語')}
      {list_lang(other, ' その他')}
    </div>
  );
};

export default Skills;

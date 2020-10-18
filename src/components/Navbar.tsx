import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {},
  tabs: {
    width: '100%',
  },
  tab: {},
}));
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Tabs className={classes.tabs} onChange={handleChange} centered>
          <Link activeClass="active" to="top" spy={true} smooth={true} offset={-200} duration={500}>
            <Tab label="Top" />
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Tab label="About" />
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Tab label="Skills" />
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Tab label="Works" />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;

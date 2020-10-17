import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <Tabs className={classes.tabs} value={value} onChange={handleChange} centered>
          <Tab label="Top" />
          <Tab label="About" />
          <Tab label="Skills" />
          <Tab label="Works" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default Navbar;

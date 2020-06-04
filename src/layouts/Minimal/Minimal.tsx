import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Topbar } from './components';

interface MinimalProps {
  children: any,
  className: string,
}

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Minimal = (props: MinimalProps) => {
  const { children } = props;

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Minimal;

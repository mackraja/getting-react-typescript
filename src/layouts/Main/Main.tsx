import React, { useState } from 'react';
import clsx from 'clsx';
import { Theme } from "@material-ui/core/styles";
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { useActions, authAction } from "../../actions";
import { Sidebar, Topbar, Footer } from './components';
import { history } from "../../redux/store";

interface MainProps {
  children: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Main = (props: MainProps) => {
  const { children } = props;
  const authActions = useActions(authAction);

  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleLogout = (event: any) => {
    event.preventDefault();
    authActions.LogOut();
    history.push('/');
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        onLogout={handleLogout}
        />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Main;

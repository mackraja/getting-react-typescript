import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { RouteComponentProps, Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";
import validate from 'validate.js';
import Routes from './routes';
import { useActions, authAction } from "./actions";
import { User } from "./model/user";
import { RootState } from "./redux/reducers";
import { history } from "./redux/store";

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './utils/validators';
import { AlertContainer } from "./components";

validate.validators = {
  ...validate.validators,
  ...validators
};

interface Props extends RouteComponentProps<void> {
	auth: User
}

function App(props?: Props) {

  const authActions = useActions(authAction);
  useEffect(() => {
		authActions.getAccountDetails();
  }, []);

  const isAuthenticated = !!props?.auth.token;

  return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <CssBaseline/>
          <AlertContainer />
          <Routes isAuthenticated={isAuthenticated} />
        </Router>
      </ThemeProvider>
  );
}

function mapStateToProps(state: RootState) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(App);
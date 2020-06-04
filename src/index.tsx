import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import configureStore from "./redux/store";
import * as serviceWorker from './serviceWorker';

const { persistor, store } = configureStore();

const reduxRoot = (
  <Provider store={store}>
    <PersistGate
				loading={null}
				persistor={persistor}
			>
        <App />
      </PersistGate>
   </Provider>
);

if (process.env.NODE_ENV === 'production') {
  ReactDOM.render(
    reduxRoot,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      ${reduxRoot}
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

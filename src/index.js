import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import "./index.css";
import Routes from './route';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";

render(
  // eslint-disable-next-line
  <Provider store={store}>
   <Routes />
  </Provider>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

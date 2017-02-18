import React, {Component} from 'react';
import { Provider } from "react-redux";
import App from './App.ios.js';
import store from '../store.ios.js';

export default class snacktime extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
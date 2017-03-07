import React, {Component} from 'react';
import { Provider } from "react-redux";
import App from './App.ios.js';
import camera from './Camera.ios.js';
import store from '../store.ios.js';
import Welcome from './Welcome.ios.js';
import { NavigatorIOS } from 'react-native';
import styles from '../styles.ios.js';

export default class BaseApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App store={store} navigator={this.props.navigator}/>
      </Provider>
    );
  }
}

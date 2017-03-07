import React, {Component} from 'react';
import { Provider } from "react-redux";
import App from './App.ios.js';
import camera from './Camera.ios.js';
import BaseApp from './baseApp.ios.js';
import Welcome from './Welcome.ios.js';
import UserPage from './UserPage.ios.js'
import { connect } from "react-redux";
import { NavigatorIOS } from 'react-native';
import styles from '../styles.ios.js';

export default class snacktime extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Welcome,
          title: 'Home'
           }}
        style={{flex: 1}}
        navigationBarHidden={true}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Home': {
        return (
          <Provider store={store}>
            <App
              navigator={navigator}
            />
          </Provider>
        )
      }

      case 'Camera': {
        return (
          <camera
            navigator={navigator}
          />
        )
      }

      case 'Results': {
        return (
          <FoodPair
            navigator={navigator}
            results={route.results}
          />
        )
      }

      case 'UserPage': {
        return (
          <UserPage
            navigator={navigator}
          />
        )
      }

    }
  }
}

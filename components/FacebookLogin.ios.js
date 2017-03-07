import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;
import styles from '../styles.ios.js';
import * as facebookActions from '../actions/facebookActions.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class FacebookLogin extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {actions} = this.props;
      AccessToken.getCurrentAccessToken()
      .then((data) => {
          if(data) {
            actions.isAuthenticated();
          }
          
        })
      .catch((err) => {
        console.log(err);
      })
    }

  render() {
      return (
        <View style={styles.facebookButton}>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log('dataaaa', data.userID);
                      console.log('access token', data.accessToken.toString());
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
        </View>
      );
    }

}

export default connect(state => ({
    state: state.facebook
  }),
  (dispatch) => ({
    actions: bindActionCreators(facebookActions.default, dispatch)
  })
)(FacebookLogin);
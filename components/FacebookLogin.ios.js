import React , { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;
import styles from '../styles.ios.js';
import * as facebookActions from '../actions/facebookActions.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state);
  }

  render() {
      return (
        <View style={styles.facebookButton}>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("Login Successfully Cancelled.");
                } else {
                  this.props.actions.facebookAction();
                }
              }
            }
            onLogoutFinished={() => Alert.alert("Successfully Logged Out")}
          />
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

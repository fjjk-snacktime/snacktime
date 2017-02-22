'use strict';
import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
// const Storage = require('google-cloud/node_modules/@google-cloud/storage');
// const Vision = require('google-cloud/node_modules/@google-cloud/vision');
// const gcloud = require('google-cloud');
// const fs = require('fs');
// const google = require('googleapis');
// // Instantiates clients
// const storage = Storage();
// const vision = Vision();

export default class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome! </Text>
      </View>
    );
  }
}
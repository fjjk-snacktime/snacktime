import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from '../styles.ios.js';

export default class snacktime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image style={styles.takePicture} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
      </View>
    );
  }
}

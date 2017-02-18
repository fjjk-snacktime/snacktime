import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from '../styles.ios.js';
import Nav from './Navbar.ios.js'

export default class snacktime extends Component {
  border(color) {
    return {
      borderColor: color,
      borderWidth: 5,
    }
  }
  render() {
    return (
      <View style={[styles.container, this.border('yellow')]}>
        <View style={[styles.navigation, this.border('pink')]} >
          <Nav />
        </View>
        <View style={[styles.app, this.border('black')]} >
          <Text style={styles.welcome}>
            Welcome to Snack Time!
          </Text>
        </View>
        <View style={[styles.buttonView]}>
          <Image style={[styles.takePicture, this.border('green')]} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
        </View>
      </View>
    );
  }
}

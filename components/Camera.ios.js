'use strict';
import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Dimensions,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import helpers from '../helper/helpers.ios.js';
var axios = require('axios');
import styles from '../styles.ios.js';

export default class camera extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.memory}>
          <Image style={styles.takePicture} onPress={this.takePicture.bind(this)} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => this.readPicture(data.data))
      .catch(err => console.error(err));
  }


  readPicture(data) {
    const descriptions = helpers.camera.imageRecognition(data);
  }

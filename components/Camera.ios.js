'use strict';
import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import helpers from '../helpers/helpers.ios.js';
var axios = require('axios');
import styles from '../styles.ios.js';
import BaseApp from './baseApp.ios.js';

export default class camera extends Component {

  constructor(props) {
    super(props)
  }

  changeNavigation(results) {
    this.props.navigator.push({
      component: baseApp,
      passProps: results
    })
  }

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
          <TouchableHighlight style={styles.takePicture} onPress={this.takePicture.bind(this)}>
            <Image style={styles.takePicture} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        this.readPicture(data.data);
      })
      .catch(err => console.error(err));
  }


  readPicture(data) {
    const descriptions = helpers.camera.imageRecognition(data);
    this.changeNavigation(descriptions);
  }
}

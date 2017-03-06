'use strict';
import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import helpers from '../helpers/helpers.js';
var axios = require('axios');
import styles from '../styles.ios.js';
import GoogleResults from './GoogleResults.ios.js';

export default class camera extends Component {

  constructor(props) {
    super(props)
  }

  changeNavigation(results) {
    this.props.navigator.push({
      component: GoogleResults,
      passProps: { results: results, store: this.props.store }
    })
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 5,
    }
  }

  goBack() {
    this.props.navigator.pop();
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
          <View style={styles.navigationResults}>
            <TouchableHighlight style={[styles.backButtonCamera, this.border('white')]} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <TouchableHighlight style={styles.takePicture} onPress={this.takePicture.bind(this)}>
              <Image style={styles.takePicture} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
            </TouchableHighlight>
          </View>
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
    helpers.camera.imageRecognition(data)
      .then(resp => {
        let descriptions = [];
        for (let obj of resp.data.responses[0].labelAnnotations) {
          descriptions.push(obj.description);
        }
        this.changeNavigation(descriptions);
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }
}

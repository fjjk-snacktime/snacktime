import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../styles.ios.js';

export default class Nav extends Component {
  border(color) {
    return {
      borderColor: color,
      borderWidth: 5,
    }
  }
  render() {
    return (
        <View style={[styles.navigation, this.border('pink')]}>
          <TouchableHighlight style={styles.glyphicon}>
            <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/home-128.png'}} style={styles.glyphicon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.glyphicon} onPress={this.props.changeNavigationCamera}>
            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/world-travel-guide/512/travel-05-512.png'}} style={styles.glyphicon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.glyphicon}>
            <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/78-instagram-512.png'}} style={styles.glyphicon} />
          </TouchableHighlight>
        </View>
      )
  }
}
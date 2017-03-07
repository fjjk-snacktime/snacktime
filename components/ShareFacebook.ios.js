import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;
import styles from '../styles.ios.js';

export default class ShareFacebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shareLinkContent: {
        contentType: 'link',
        contentUrl: props.url,
        contentDescription: 'Wow, check out this great recipe from Snacktime!'
      }
    }
  }

  shareLinkWithShareDialog() {
  ShareDialog.canShow(this.state.shareLinkContent)
    .then( canShow => {
      if (canShow) {
        return ShareDialog.show(this.state.shareLinkContent);
      }
    }
  )
    .then( result => {
      if (result.isCancelled) {
        alert('Share cancelled');
      } else {
        console.log('result', Object.keys(result));
      }
    }, error => {
      alert('Share fail with error: ' + error);
    });
  }

  render() {
      return (
        <View>
          <TouchableOpacity
            onPress={this.shareLinkWithShareDialog.bind(this)}
          >
            <Image source={require('../facebook_icon.png')} style={styles.shareIcons} /> 
          </TouchableOpacity>
        </View>
      );
    }
  }

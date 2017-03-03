import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
const { LoginButton, AccessToken, ShareDialog } = FBSDK;

export default class FacebookLogin extends Component {
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
            <Text>Share on Facebook!</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

const FBSDK = require('react-native-fbsdk');
const {
  ShareDialog,
} = FBSDK;

// ...

// Build up a shareable link.
const shareLinkContent = {
  contentType: 'link',
  contentUrl: "https://facebook.com",
  contentDescription: 'Wow, check out this great site!',
};

// ...

// Share the link using the share dialog.
shareLinkWithShareDialog() {
  var tmp = this;
  ShareDialog.canShow(this.state.shareLinkContent).then(
    function(canShow) {
      if (canShow) {
        return ShareDialog.show(tmp.state.shareLinkContent);
      }
    }
  ).then(
    function(result) {
      if (result.isCancelled) {
        alert('Share cancelled');
      } else {
        alert('Share success with postId: '
          + result.postId);
      }
    },
    function(error) {
      alert('Share fail with error: ' + error);
    }
  );
}
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
        contentUrl: "https://dimeadozenclothing.com",
        contentDescription: 'Wow, check out this great site!'
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
          <View>
            <LoginButton
              publishPermissions={["publish_actions"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log('access token', data.accessToken.toString());
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => alert("logout.")}/>
          </View>
        </View>
      );
    }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity onPress={this.fbAuth}>
  //         <Text>
  //           Login with Facebook
  //         </Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})
'use strict';
import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  WebView,
  Animated,
  Easing,
  LayoutAnimation,
  UIManager,
  TouchableWithoutFeedback,
  Switch,
  Dimensions
} from 'react-native';
import App from './App.ios.js';
import MyScene from './MyScene.ios.js';
import { NavigatorIOS } from 'react-native';
import webComponent from './video.ios.js';
import Button from 'react-native-flat-button'
import * as Animatable from 'react-native-animatable';

// const Storage = require('google-cloud/node_modules/@google-cloud/storage');
// const Vision = require('google-cloud/node_modules/@google-cloud/vision');
// const gcloud = require('google-cloud');
// const fs = require('fs');
// const google = require('googleapis');
// // Instantiates clients
// const storage = Storage();
// const vision = Vision();

export default class Welcome extends Component {
  constructor(props) {
    super(props);

  }

  toRoute() {
    // this.props.navigator.push({
    //   component: App
    // })
    Alert.alert('to home')
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.toRoute}
        >
        <Image
          source={require('../backgroundimage/funny.jpg')}
          style={styles.backgroundimage}>
          <View>
            <Animatable.Text
              style={styles.header}
              animation="fadeInDown"
              duration={4000}
              direction="alternate" >
              <Text>Welcome To Snacktime</Text>
            </Animatable.Text>

            <Animatable.Text
              style={styles.comingInWord}
              animation="fadeInUp"
              color="#841584"
              delay={2000}
              duration={4000}
              >
              <Text>Touch Anywhere to begin</Text>
            </Animatable.Text>
          </View>
        </Image>
      </TouchableWithoutFeedback>

    );
  }
}





// <View>
//   <video autoplay loop id="video-background" muted>
//     <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4">
//     </video>
//   </View>

///////////////////////////////// ONE STYLE ///////////////////

// import Button from 'apsl-react-native-button'


// <Animatable.View
//     animation="fadeInUp"
//     color="#841584"
//     delay={3000}
//     duration={10000}
//     >
//     <Button
//       style={{backgroundColor: 'blue', width: 200}}
//       onPress={this.toRoute}
//       >
//       <View style={styles.nestedViewStyle}>
//         <Text style={styles.nestedTextStyle}>Nested views!</Text>
//       </View>
//     </Button>
// </Animatable.View>
///////////////////////////////// ONE STYLE ///////////////////


///////////////////////////////// BUTTON STYLE ////////////////////////


// <Animatable.View
//   ref="view"
//   animation="fadeInUp"
//   color="#841584"
//   delay={2000}
//   duration={7000}
//   >
//   <Button
//       type="warn"
//       onPress={this.toAnotherRoute}
//       title={'Learn More!'}
//       containerStyle={styles.buttonContainer}
//       >
//       Learn More!
//   </Button>
// </Animatable.View>
//
// <Animatable.View
//     animation="fadeInUp"
//     color="#841584"
//     delay={2000}
//     duration={7000}
//     >
//       <Button
//         type="info"
//         onPress={this.toRoute}
//         containerStyle={styles.buttonContainer}
//         >
//         Lets Go!
//       </Button>
// </Animatable.View>

///////////////////////////////// BUTTON STYLE ////////////////////////


// <TouchableHighlight onPress={() => this.refs.text.transitionTo({opacity: 0.2});}>
//   <Animatable.View ref='text'>
//     <Text>Welcome To Snacktime</Text>
//     </Animatable.View>
// </TouchableHighlight>


// D3 drop down of Welcome to Snacktime
// and two words will appear (button)

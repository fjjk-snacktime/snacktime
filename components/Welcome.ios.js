'use strict';
import React, { Component } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  Image,
  LayoutAnimation,
  Navigator,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  UIManager,
} from 'react-native';
import App from './App.ios.js';
import { NavigatorIOS } from 'react-native';
import Video from 'react-native-video';
import BaseApp from './baseApp.ios.js';
import Button from 'react-native-flat-button'
import * as Animatable from 'react-native-animatable';
import styles from '../styles.ios.js';

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
    this.props.navigator.push({
      component: BaseApp
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toRoute.bind(this)} >
        <View>
          <Video
            repeat
            resizeMode='cover'
            source={require('../food.mp4')}
            style={styles.backgroundVideo} />
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
      </TouchableWithoutFeedback>
    );
  }
}
// testing

// <TouchableWithoutFeedback
//   onPress={this.toRoute}
//   >
//   <Image
//     source={require('../backgroundimage/funny.jpg')}
//     style={styles.backgroundimage}>
//
//     </View>
//   </Image>
// </TouchableWithoutFeedback>

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

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
  LayoutAnimation,
  UIManager,
  Switch,
  Dimensions
} from 'react-native';
import styles from '../styles.ios.js';
import { Button } from 'native-base';


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }
  
  render() {
    return (
    	<Animated.View>
            <Text>My Sliding Box</Text>
        </Animated.View>
    );
  }
}


// D3 drop down of Welcome to Snacktime
// and two words will appear (button)

import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, Navigator, Button, Icon} from 'react-native';

export default class MyScene extends Component {

  handlePress() {
    console.log('Pressed!');
  }

  render() {
    return (
      <View>
        <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={this.handlePress}
            title={'Press Me!'}>
        </Button>
      </View>
    )
  }
}

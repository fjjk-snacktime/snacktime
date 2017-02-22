import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

export default class FoodpairResults extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <Text>{this.props.food}</Text>
      </View>
    )
  }
}
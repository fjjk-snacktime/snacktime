import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import styles from '../styles.ios.js';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  searchFoodPairing() {
    console.log('state', this.state.text)
    //jeff do somethign with this to make it search for food pairing api
  }

  render() {
    return (
      <View >
        <TextInput
          onSubmitEditing={this.searchFoodPairing.bind(this)}
          style={styles.searchBar}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'search your ingredients!'}
        />
      </View>
    )
  }
}
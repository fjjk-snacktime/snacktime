import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from '../styles.ios.js';
import helpers from '../helpers/helpers.js';
import FoodpairResults from './FoodpairResults.ios.js';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  searchFoodPairing() {
    this.props.rendering();   
    helpers.foodpairing.getFoodpairings(this.state.text)
      .then(resp => {
        this.props.navigator.push({
          component: FoodpairResults,
          passProps: { foodpairs: resp.data, food: this.state.text }
        })
      })
      .catch(err => {
        console.log('error', err);
      })
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


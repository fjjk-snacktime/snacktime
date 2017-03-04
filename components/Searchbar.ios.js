import React, { Component } from 'react';
import { Text, View, Image, TextInput, Alert } from 'react-native';
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
    setTimeout(() => {
      if (this.props.isRendering) {
        Alert.alert('Not a valid ingredient');
      }
      this.props.lagOut();
    }, 10000)   
    helpers.foodpairing.getFoodpairings(this.state.text)
      .then(resp => {
        this.props.rendering();
        this.props.navigator.push({
          component: FoodpairResults,
          passProps: { foodpairs: resp.data, food: this.state.text, store: this.props.store }
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
          placeholder={'Search your ingredients!'}
        />
      </View>
    )
  }
}


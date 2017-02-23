import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import styles from '../styles.ios.js';
import helpers from '../helpers/helpers.ios.js';
import FoodpairResults from './FoodpairResults.ios.js';
import axios from 'axios';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  searchFoodPairing() {
    helpers.foodpairing.getFoodID(this.state.text)
      .then(resp => {
        return resp.data[0].id
      })
      .then(id => {
        helpers.foodpairing.getFoodpairings(id)
          .then(response => {
            console.log(response.data[0]._link)
            this.props.navigator.push({
              component: FoodpairResults,
              passProps: { foodpairs: response.data }
            })
          }) 
          .catch(error => {
            console.log('Error: ', error);
          })
      })
      .catch(err => {
        console.log('Error: ', err);
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
import React , { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import helpers from '../helpers/helpers.js';
import UserPage from './UserPage.ios.js';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
  }

  saveRecipe() {
    helpers.user.saveRecipe(this.props.userid.userID, this.props.info.title, this.props.info.id, this.props.info.image, this.props.ingredients)
      .then((reponese) => {
        console.log('recipe created', reponese.data)
        this.props.navigator.push({
          component: UserPage
        })
      }).catch((error) => {
        console.log('no recipe created')
      });
  }

  render() {
      return (
        <View>
          <TouchableOpacity
            onPress={this.saveRecipe.bind(this)}
          >
            <Text>Save Recipe</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

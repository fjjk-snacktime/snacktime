import React , { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Button from 'react-native-flat-button'
import helpers from '../helpers/helpers.js';
import UserPage from './UserPage.ios.js';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
  }

  saveRecipe() {
    helpers.user.saveRecipe(this.props.userid.userID, this.props.info.title, this.props.info.id, this.props.info.image, this.props.ingredients)
      .then((response) => {
        console.log('recipe created', response.data)
        this.props.navigator.push({
          component: UserPage,
          passProps: { store: this.props.store}
        })
      }).catch((error) => {
        console.log('no recipe created')
      });
  }

  render() {
      return (
        <View>
          <Button
              type="info"
              onPress={this.saveRecipe.bind(this)}
              containerStyle={styles.buttonContainer}
              >
              <Text style={styles.buttontext}>Save Recipe</Text>
          </Button>
        </View>
      );
    }
  }

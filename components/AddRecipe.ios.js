import React , { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  saveRecipe() {
    var local = 'http://localhost:8000/'
    var reqBody = {
      "name": this.props.info.title,
      "id": this.props.info.id,
      "image": this.props.info.image,
      "analyzedInstructions": this.props.ingredients
    }
    console.log('the info', reqBody)
    axios.post(`${local}AddRecipe`, reqBody)
    .then((reponese) => {
      console.log('recipe created', reponese.data)
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

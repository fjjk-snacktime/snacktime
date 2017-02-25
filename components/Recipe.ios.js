import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      steps: ds.cloneWithRows(props.recipe.steps),
      ingredients: []
    }
  }

  componentWillMount() {
    this.renderIngredients();
  }

  goBack() {
    this.props.navigator.pop();
  }

  renderIngredients() {
    let ingredients = [];
    for (let step of this.props.recipe.steps) {
      for (let ingredient of step.ingredients) {
        ingredients.push(ingredient.name);
      }
    }
    this.setState({
      ingredients: ingredients
    })
  }
  render() {
    const ingredients = this.state.ingredients.map((ingredient, i) => {
      return (
        <Text style = {styles.ingredientList} key={i}> {ingredient} </Text>
      )
    });
    return(
      <View style={styles.resultsList}>
          <View style={styles.navigationResults}>
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <View style={styles.resultsTitle}> 
              <Text style={styles.resultsTitleText}> Recipe Instructions </Text>
            </View>
          </View>
          <View style={ingredientList}>
            {ingredients}
          </View>
          <ListView
            dataSource={this.state.steps}
            renderRow={(step, i) => {
              return (
              <View
                key={i} 
                style={styles.listItem}
                underlayColor="grey"
                style={styles.resultsList}
                >
                  <View style={styles.listItem}>
                    <Text style={styles.foodPairText}>step {step.number}: {step.step}</Text>
                  </View>
              </View>
              )}}
          />
        </View>
    )
  }
}
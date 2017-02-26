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
      console.log('Recipe steps', this.props.recipe.steps)
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
        <Text style = {styles.ingredientListText} key={i}>∙ {ingredient} </Text>
      )
    });
    return(
      <View style={styles.recipe}>
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}>Instructions for {this.props.food}:</Text>
          </View>
          <View style={styles.ingredientContainer}>
            <View style={styles.ingredientList}>
              <Text style={styles.recipeTitle}>Ingredients:</Text>
              <Text style={styles.ingredientListText}>{ingredients}</Text>
            </View>
            <Image source={{uri: this.props.image}} style={styles.recipeImage} />
          </View>
          <View>
            <Text style={styles.recipeTitle}>Directions:</Text>
          </View>
          <ListView
            style={styles.recipe}
            dataSource={this.state.steps}
            renderRow={(step, i) => {
              let image = step.ingredients[0] ? step.ingredients[0].image : 'https://spoonacular.com/recipeImages/buffalo-chicken-panini-with-blue-cheese-and-celery-sdf2-12413.jpg';
              return (
              <View
                key={i} 
                style={styles.recipeStep}
                underlayColor="grey"
                >
                  <Image source={{uri: image}} style={styles.recipeImage} />
                  <Text style={styles.recipeStepText}>step {step.number}: {step.step}</Text>
              </View>
              )}}
          />
        </View>
    )
  }
}
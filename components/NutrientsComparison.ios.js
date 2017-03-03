import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import Recipe from './Recipe.ios.js';
import styles from '../styles.ios.js';
import data from '../helpers/data/chickenData.js';


export default class NutrientsComparison extends Component {
  constructor(props) {
    super(props);
  }

  selectRecipe(id, title, image) {
    helpers.recipes.getRecipe(id)
      .then( resp => {
        this.props.navigator.push({
          component: Recipe,
          passProps: { recipe: resp.data, food: title, image: image  }
        })
      })
  }

  render() {
    const renderNutrients = (index) => {
      return Object.keys(this.props.results[index]).map((nutrient, i) => {
          console.log(this.props.results[index][nutrient]);
        return (
          <Text style = {styles.ingredientListText} key={i} >{nutrient}: {this.props.results[index][nutrient][0]} {this.props.results[index][nutrient][1]}</Text>
        )
      })
    };

    const compareNutrients = Object.keys(this.props.results[0]).map((nutrient, i) => {
      if (this.props.results[0][nutrient][0] > this.props.results[1][nutrient][0]) {
        return (
          <Text style = {[styles.ingredientListText, {color: 'green'}]} key={i}>{nutrient}: {Math.floor(Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0]))} {this.props.results[1][nutrient][1]}</Text>
        )
      } else {
        return (
          <Text style = {[styles.ingredientListText, {color: 'red'}]} key={i}>{nutrient}: {Math.floor(Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0]))} {this.props.results[1][nutrient][1]}</Text>
        )
      }
    })
    return (
      <View style={styles.compareNutrientsContainer}>
        <TouchableHighlight style={styles.compareRecipe} onPress={this.selectRecipe.bind(this, this.props.ids[0], this.props.titles[0], this.props.images[0])} >
          <View style={styles.compareRecipe} >
          <View style={styles.compareRecipe}>
            <Text style={styles.compareRecipeTitle} >{this.props.titles[0]} </Text>
            <Image style={styles.resultsPicture} source={{uri: this.props.images[0]}} />
          </View>
          <View style={styles.compareRecipe}>{renderNutrients(0)}</View>
          </View>
        </TouchableHighlight>
        <View style={styles.compareRecipe} >
          <Text style={styles.compareRecipeTitle} > Comparison: </Text>
          <View style={styles.compareRecipe}>{compareNutrients}</View>
        </View>
        <TouchableHighlight style={styles.compareRecipe} onPress={this.selectRecipe.bind(this, this.props.ids[0], this.props.titles[0], this.props.images[0])}>
          <View style={styles.compareRecipe} >
          <View style={styles.compareRecipe}>
            <Text style={styles.compareRecipeTitle} >{this.props.titles[1]} </Text>
            <Image style={styles.resultsPicture} source={{uri: this.props.images[1]}} />
          </View>
          <View style={styles.compareRecipe}>{renderNutrients(1)}</View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
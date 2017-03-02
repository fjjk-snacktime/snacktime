import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import Recipe from './Recipe.ios.js';
import styles from '../styles.ios.js';

export default class NutrientsComparison extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderNutrients = (index) => {
      return Object.keys(this.props.results[index]).map((nutrient, i) => {
        return (
          <Text style = {styles.ingredientListText} key={i}>{key}: {this.props.results[index][nutrient][0]} {this.props.results[0][nutrient][1]}</Text>
        )
      })
    };

    const compareNutrients = Object.keys(this.props.results[0]).map((nutrient, i) => {
      if (this.props.results[0][nutrient][0] > this.props.results[1][nutrient][0]) {
        return (
          <Text style = {[styles.ingredientListText, {color: 'green'}]} key={i}>{Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0])}</Text>
        )
      } else {
        return (
          <Text style = {[styles.ingredientListText, {color: 'red'}]} key={i}>{Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0])}</Text>
        )
      }
    })
    return (
      <View style={styles.compareNutrientsContainer}>
        <View style={styles.compareRecipe} >
          <View style={styles.compareNutrientsContainer}>
            <Text style={compareRecipeTitle} >{this.props.title[0]} </Text>
            <Image style={resultsPicture} source={{uri: this.props.images[0]}} />
          </View>
          <Text style={styles.ingredientListText}>{renderNutrients(0)}</Text>
        </View>
        <View style={styles.compareRecipe} >
          <Text style={compareRecipeTitle} > Comparison: </Text>
          <Text style={styles.ingredientListText}>{compareNutrients}</Text>
        </View>
        <View style={styles.compareRecipe} >
          <View style={styles.compareNutrientsContainer}>
            <Text style={compareRecipeTitle} >{this.props.title[1]} </Text>
            <Image style={resultsPicture} source={{uri: this.props.images[1]}} />
          </View>
          <Text style={styles.ingredientListText}>{renderNutrients(1)}</Text>
        </View>
      </View>
    )
  }
}
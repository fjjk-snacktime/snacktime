import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight, ScrollView } from 'react-native';
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

  goBack() {
    this.props.navigator.pop();
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
          <Text style = {[styles.ingredientListText, {color: '#458B00'}]} key={i}>⇦  {nutrient}: {Math.floor(Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0]))} {this.props.results[1][nutrient][1]}</Text>
        )
      } else {
        return (
          <Text style = {[styles.ingredientListText, {color: '#B22222'}]} key={i}>{nutrient}: {Math.floor(Math.abs(this.props.results[0][nutrient][0] - this.props.results[1][nutrient][0]))} {this.props.results[1][nutrient][1]}  ⇨</Text>
        )
      }
    })
    return (
      <View style={styles.resultsList}>
        <View style={styles.resultsTitle}> 
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <Text style={styles.compareRecipeText}>Nutritional Comparison:</Text>
        </View>
        <View style={styles.compareNutrientsContainer}>
          <View style={styles.compareNutrientsHeader} >
            <TouchableHighlight style={styles.compareHeader} onPress={this.selectRecipe.bind(this, this.props.ids[0], this.props.titles[0], this.props.images[0])} >
              <View style={[styles.compareHeader, {backgroundColor: '#3B5323'}]}>
                <Text style={styles.compareRecipeTitle} >{this.props.titles[0]} </Text>
                <Image style={styles.resultsPicture} source={{uri: this.props.images[0]}} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.compareHeader} onPress={this.selectRecipe.bind(this, this.props.ids[1], this.props.titles[1], this.props.images[1])} >
              <View style={[styles.compareHeader, {backgroundColor: '#E9967A'}]}>
                <Text style={styles.compareRecipeTitle} >{this.props.titles[1]} </Text>
                <Image style={styles.resultsPicture} source={{uri: this.props.images[1]}} />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.compareNutrientsHeader} >
            <TouchableHighlight style={styles.compareRecipe} onPress={this.selectRecipe.bind(this, this.props.ids[0], this.props.titles[0], this.props.images[0])} >
              <View style={[styles.compareRecipe, {backgroundColor: '#3B5323'}]} >
                <ScrollView style={styles.compareRecipe}>{renderNutrients(0)}</ScrollView>
              </View>
            </TouchableHighlight>
            <View style={styles.compareRecipe} >
              <View style={styles.compareNutrients}>{compareNutrients}</View>
            </View>
            <TouchableHighlight style={styles.compareRecipe} onPress={this.selectRecipe.bind(this, this.props.ids[1], this.props.titles[1], this.props.images[1])}>
              <View style={[styles.compareRecipe, {backgroundColor: '#E9967A'}]} >
                <ScrollView style={styles.compareRecipe}>{renderNutrients(1)}</ScrollView>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
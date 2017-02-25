import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import Response from '../helpers/data/chickenData.js';
import Recipe from './Recipe.ios.js';
import styles from '../styles.ios.js';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      foodDataSource: ds.cloneWithRows(props.recipes)
    }
  }

  selectRecipe(id) {
    helpers.recipes.getRecipe(id)
      .then( resp => {
        this.props.navigator.push({
          component: Recipe,
          passProps: {recipe: resp.data}
        })
      })
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    if (this.props.recipes.length === 0) {
      return (
        <View style={[styles.container]}>
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <View style={[styles.app]} >
            <Text style={styles.welcome}>
              Sorry there are no matches for this food pairing at this time, please try another pairing
            </Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.resultsList}>
          <View style={styles.navigationResults}>
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <View style={styles.resultsTitle}> 
              <Text style={styles.resultsTitleText}> Recipes results </Text>
            </View>
          </View>
          <ListView
            dataSource={this.state.foodDataSource}
            renderRow={(recipe, i) => (

              <TouchableHighlight
                key={i} 
                style={styles.listItem}
                underlayColor="grey"
                style={styles.resultsList}
                >
                <TouchableHighlight onPress={this.selectRecipe.bind(this, recipe.id)}>
                  <View style={styles.listItem}>
                    <Image style={styles.resultsPicture} source={{uri: recipe.image}} />
                    <Text style={styles.foodPairText}>{recipe.title}</Text>
                    <Text style={styles.foodPairText}>Missing ingredients: {recipe.missedIngredientCount}</Text>
                    <Text style={styles.foodPairText}>Likes: {recipe.likes}</Text>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
              )}
          />
        </View>
      )
    }
  }
}
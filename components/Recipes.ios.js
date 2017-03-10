import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight, TouchableOpacity } from 'react-native';
import helpers from '../helpers/helpers.js';
import Recipe from './Recipe.ios.js';
import styles from '../styles.ios.js';
import NutrientComparisons from './NutrientsComparison.ios.js';
export default class Recipes extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      foodDataSource: ds.cloneWithRows(props.recipes),
      comparing: false,
      compareArray: [],
      titles: [],
      images: []
    }
  }
  selectRecipe(id, title, image) {
    if (this.state.comparing) {
      console.log('in comparing');
      this.comparing(id, title, image);
    } else {
      helpers.recipes.getRecipe(id)
        .then( resp => {
          this.props.navigator.push({
            component: Recipe,
            passProps: { store: this.props.store, recipe: resp.data, food: title, image: image  }
          })
        })
    }
  }
  goBack() {
    this.props.navigator.pop();
  }
  compareRecipe() {
    this.setState({
      comparing: !this.state.comparing
    })
    this.forceUpdate();
  }
  comparing(id, title, image) {
    this.state.compareArray.push(id);
    this.state.titles.push(title);
    this.state.images.push(image);
    if (this.state.compareArray.length === 2) {
      helpers.recipes.compareRecipes(this.state.compareArray)
        .then( resp => {
          this.props.navigator.push({
            component: NutrientComparisons,
            passProps: {results: resp.data, ids: this.state.compareArray, titles: this.state.titles, images: this.state.images, store: this.props.store}
          })
        })
    }
      // this.props.navigator.push({
      //   component: NutrientComparisons,
      //   passProps: {results: fakeData, ids: this.state.compareArray, titles: this.state.titles, images: this.state.images}
      // })
  }
  render() {
    if (this.props.recipes.length === 0) {
      return (
        <View style={[styles.container]}>
          <View style={styles.resultsTitle}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableOpacity>
            <Text style={styles.resultsTitleText}>We are unable to find any pairings for the selected item at this time</Text>
          </View>
        </View>
      )
    } else if (this.state.comparing) {
      return (
        <View style={styles.resultsList}>
          <View style={styles.resultsTitle}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableOpacity>
            <Text style={styles.resultsTitleText}>Comparing Recipes:</Text>
            <TouchableOpacity onPress={this.compareRecipe.bind(this)}>
              <Image source = {{uri: 'https://tavaga.com/images/compare-button.png'}} style = {styles.shareButton} />
            </TouchableOpacity>
          </View>
          <ListView
            dataSource={this.state.foodDataSource}
            renderRow={(recipe, i) => (
              <TouchableHighlight
                key={i}
                style={styles.listItem}
                underlayColor="blue"
                style={styles.resultsList}
                onPress={ this.comparing.bind(this, recipe.id, recipe.title, recipe.image)}
                >
                <TouchableHighlight onPress={ this.comparing.bind(this, recipe.id, recipe.title, recipe.image)}>
                  <View style={styles.listItem}>
                    <Image style={styles.resultsPicture} source={{uri: recipe.image}} />
                    <View style={styles.listItemContainer}>
                      <View style={styles.listItemTitle}>
                        <Text style={styles.recipeTitle}>{recipe.title}</Text>
                      </View>
                      <View style={styles.listItemText}>
                        <Text style={styles.recipeDescription}>Missing ingredients: {recipe.missedIngredientCount}</Text>
                        <Text style={styles.recipeDescription}>Likes: {recipe.likes}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
              )}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.resultsList}>
          <View style={styles.resultsTitle}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableOpacity>
            <Text style={styles.resultsTitleText}>Recipes:</Text>
            <TouchableOpacity onPress={this.compareRecipe.bind(this)}>
              <Image source = {{uri: 'https://tavaga.com/images/compare-button.png'}} style = {styles.shareButton} />
            </TouchableOpacity>
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
                <TouchableHighlight onPress={this.selectRecipe.bind(this, recipe.id, recipe.title, recipe.image)}>
                  <View style={styles.listItem}>
                    <Image style={styles.resultsPicture} source={{uri: recipe.image}} />
                    <View style={styles.listItemContainer}>
                      <View style={styles.listItemTitle}>
                        <Text style={styles.recipeTitle}>{recipe.title}</Text>
                      </View>
                      <View style={styles.listItemText}>
                        <Text style={styles.recipeDescription}>Missing ingredients: {recipe.missedIngredientCount}</Text>
                        <Text style={styles.recipeDescription}>Likes: {recipe.likes}</Text>
                      </View>
                    </View>
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

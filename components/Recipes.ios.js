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
    if (this.props.recipes.length === 0) {
      return (
        <View style={[styles.container]}>
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}>We are unable to find any pairings for the selected item at this time</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.resultsList}>
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}>Recipes:</Text>
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
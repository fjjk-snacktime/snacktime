import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight, TouchableOpacity } from 'react-native';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';
import Recipes from './Recipes.ios.js';
import AddIngredient from './AddIngredient.ios.js';


export default class FoodpairResults extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      foodDataSource: ds.cloneWithRows(props.foodpairs)
    }
  };

  addIngredient() {
    this.props.navigator.push({
      component: AddIngredient,
      passProps: {
        ingredients: [this.props.food],
        store: this.props.store
      }
    })
  }

  selectFood(data) {
    if (data.includes('(')) {
      data = data.slice(0, data.indexOf('('));
    }
    
    if (this.props.ingredients) {
      data = this.props.ingredients.join(', ') + `, ${data}`
    }

    const query = `${this.props.food},${data}`;
    helpers.recipes.getRecipeList(query)
      .then(resp => {
         this.props.navigator.push({
          component: Recipes,
          passProps: {
            store: this.props.store,
            recipes: resp.data,
            rendering: this.props.rendering
          }
        })
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.resultsList}>
        <View style={styles.resultsTitle}> 
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <Text style={styles.resultsTitleText}> {this.props.food} pairs well with:</Text>
          <View style={styles.addIngredientContainer}>
            <TouchableOpacity
              style={styles.addIngredientButton}
              onPress={this.addIngredient.bind(this)}
            >
            <Text style={styles.addIngredientText1}>Add</Text>
            <Image style={styles.addIngredientButton} source={require('../public/addicon.png')} />
            <Text style={styles.addIngredientText2}>Ingredient</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ListView
          dataSource={this.state.foodDataSource}
          renderRow={(foodpair, i) => (

            <TouchableHighlight
              key={i} 
              style={styles.listItem}
              underlayColor="grey"
              value={foodpair}
              >
              <TouchableHighlight onPress={this.selectFood.bind(this, foodpair._links.ingredient.name)}>
                <View style={styles.listItem}>
                  <Image source={{uri: foodpair._links.ingredient._links.image.size_240}} style={styles.resultsPicture} />
                    <View style={styles.listItemContainer}>
                      <View style={styles.listItemTitle}>
                        <Text style={styles.foodPairText}>{foodpair._links.ingredient.name}</Text>
                      </View>
                      <View style={styles.listItemText}>
                        <Text style={styles.foodPairTextDescription}>{foodpair._links.ingredient.description}</Text>
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
import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';
import Recipes from './Recipes.ios.js';


export default class FoodpairResults extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      foodDataSource: ds.cloneWithRows(props.foodpairs)
    }
  };

  selectFood(data) {
    const query = `${this.props.food} ${data}`;
    let temp = query.split(' ').join('+');
    helpers.recipes.getRecipeList(temp)
      .then(resp => {
        console.log(resp)
         this.props.navigator.push({
           component: Recipes,
           passProps: { recipes: resp.data }
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
        <View style={styles.navigationResults}>
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <View style={styles.resultsTitle}> 
            <Text style={styles.resultsTitleText}> Things that go well with {this.props.food} </Text>
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
              style={styles.resultsList}
              >
              <TouchableHighlight onPress={this.selectFood.bind(this, foodpair._links.ingredient.name)}>
                <View style={styles.listItem}>
                  <Image source={{uri: foodpair._links.ingredient._links.image.size_240}} style={styles.resultsPicture} />
                  <Text style={styles.foodPairText}>{foodpair._links.ingredient.name}</Text>
                  <Text style={styles.foodPairText}>{foodpair._links.ingredient.description}</Text>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
            )}
        />
      </View>
    )
  }
}
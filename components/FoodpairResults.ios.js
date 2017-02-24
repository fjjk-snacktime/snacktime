import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';

export default class FoodpairResults extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      foodDataSource: ds.cloneWithRows(props.foodpairs)
    }
  };

  selectFood(data) {
    const query = `${this.props.food} ${data}`
    helpers.recipes.getRecipeID(query)
      .then(resp => {
        console.log('select food response', resp)
      })
      .then(id => {
        /* get necessary recipe properties */
        // this.props.navigator.push({
        //   component: Recipes,
        //   passProps: { 
        //     recipes: 'placeholder',

        //     }
        // })
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.foodDataSource}
          renderRow={(foodpair, i) => (

            <TouchableHighlight
              key={i} 
              style={styles.listItem}
              underlayColor="grey"
              value={foodpair}
              >
              <TouchableHighlight style={styles.view} onPress={this.selectFood.bind(this, foodpair._links.ingredient.name)}>
                <View>
                  <Image source={{uri: foodpair._links.ingredient._links.image.size_240}} style={{ height: 100, width: 100}} />
                  <Text style={{fontSize: 7}}>{foodpair._links.ingredient.name}</Text>
                  <Text style={{fontSize: 5}}>{foodpair._links.ingredient.description}</Text>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
            )}
        />
      </View>
    )
  }
}
// {foodpair._links.ingredient.description}
const styles = {
  listItem: {
    flex: 1,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    height: 75,
    fontSize: 35,
    fontWeight: 'bold'
  },
  view: {
    justifyContent: 'center'
  }
}


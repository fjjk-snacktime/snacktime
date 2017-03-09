import React, { Component } from 'react';
import axios from 'axios';
import {
        View,
        Text,
        Image,
        Navigator,
        Button,
        ScrollView,
        ListView,
        Icon,
        TouchableHighlight,
        Alert
      } from 'react-native';
import styles from '../styles.ios.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      ingredients: []
    };
  }

  goBack() {
    this.props.navigator.pop();
  }

  componentWillMount() {
    if(!this.props.state.payload) {
      console.log('nothing')
    } else {
      this.getData();
    }
  }

  // create NewUser if not find in DB
  createNewUserIfNotAccount(useridforfb) {
    var local = 'http://localhost:8000/'
    var userid = useridforfb
    var reqBody = {
      "id": userid
    }
    axios.post(`${local}database`, reqBody)
    .then((reponese) => {
      console.log('new user created', reponese.data)
    }).catch((error) => {
      console.log('no user created')
    });
  }

  // renderIngredients() {
  //   let ingredients = [];
  //   for (let ingredient of this.props.recipe.extendedIngredients) {
  //     ingredients.push(ingredient.originalString);
  //   }
  //   this.setState({
  //     ingredients: ingredients
  //   })
  // }

  getData() {
    var local = 'http://localhost:8000/'
    var FacebookUserID = this.props.state.payload.userID
    axios.get(`${local}database`, {
      params: {
        ID: FacebookUserID
      }
    })
    .then((response) => {
      console.log('this is coming back from db', response.data[0].FavoriteRecipe)
      var userrecipedata = response.data[0].FavoriteRecipe
        this.setState({
          dataSource: userrecipedata
        })
      })
      .catch((error) => {
      this.createNewUserIfNotAccount(FacebookUserID)
    })
  }

  render() {
    if (this.props.state.isAuthenticated) {
    return (
      <View>
        <Text style={{marginTop: 25}}>UserHomePage</Text>
        <TouchableHighlight style={styles.backButtonCamera} onPress={this.goBack.bind(this)}>
          <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
        </TouchableHighlight>
        <Text>Your FavoriteRecipe</Text>
        <ScrollView style={{marginBottom: 110}}>
        {this.state.dataSource.map((data, index) => (
          <View key={index} style={styles.ingredientContainer}>
            <View style={styles.ingredientList}>
              <Text>Recipe Name: {data.name}</Text>
                <View style={styles.recipeImageAndIcons}>
                  <Image source={{uri: data.image}} style={styles.recipeImage} />
                </View>
                <TouchableHighlight style={styles.backButtonCamera} onPress={this.goBack.bind(this)}>
                  <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
                </TouchableHighlight>
            </View>
          </View>
        ))}
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View style={{marginTop: 75}}>
        <Text>Not login</Text>
        <TouchableHighlight style={styles.backButtonCamera} onPress={this.goBack.bind(this)}>
          <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
        </TouchableHighlight>
      </View>
      )
    }
  }
}

export default connect(state => ({
    state: state.facebook
  }), null
)(UserPage);

// <Text style={styles.recipeTitle2}>Ingredients:</Text>
// <Text style={styles.ingredientListText2}>{ingredients}</Text>

import React, { Component } from 'react';
import axios from 'axios';
import {
        View,
        Text,
        Image,
        ScrollView,
        ListView,
        TouchableHighlight,
      } from 'react-native';
import styles from '../styles.ios.js';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';
import {bindActionCreators} from 'redux';

import * as Animatable from 'react-native-animatable';
import helpers from '../helpers/helpers.js';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      ingredients: []
    }
  }

  goBack() {
    this.props.navigator.pop();
  }

  componentWillMount() {
    if(!this.props.state.id) {
      console.log('THERE IS NO STATE ID')
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
    axios.post(`${local}createUser`, reqBody)
    .then((reponese) => {
    }).catch((error) => {
    });
  }

  deleteRecipe(recipeId) {
    helpers.user.deleteRecipe(recipeId, this.props.state.id);
    this.getData();
  }

  getData() {
    var local = 'http://localhost:8000/'
    var FacebookUserID = this.props.state.id.userID
    axios.get(`${local}findUser`, {
      params: {
        ID: FacebookUserID
      }
    })
    .then((response) => {
      var userrecipedata = response.data[0].FavoriteRecipe
        this.setState({
          dataSource: userrecipedata
        })
      })
      .catch((error) => {
        console.log('creating a new user');
      this.createNewUserIfNotAccount(FacebookUserID)
    })
  }


  render() {
    console.log("this is data", this.state.dataSource)
    if (this.props.state.isAuthenticated) {
    return (
      <View style={styles.resultsList}>
        <View style={styles.resultsTitle}>
          <TouchableHighlight style={styles.backButtonCamera} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <Text style={styles.usertitle}>UserHomePage</Text>
          <Text>Your FavoriteRecipe</Text>
        </View>
        <ScrollView style={styles.userPage}>
          {this.state.dataSource.map((data, index) => (
            <View key={index} style={styles.ingredientsColor}>
              <View style={styles.listforuserRecipes}>
                  <View style={styles.removeListItem}>
                    <TouchableHighlight onPress={this.deleteRecipe.bind(this, data.id)}>
                      <Image style={styles.removeIcon} source={require('../public/delete.png')}/>
                    </TouchableHighlight>
                  </View>
                <Text style={styles.recipeName}>{data.name}</Text>
                  <View style={styles.favorImageContainer}>
                    <Image source={{uri: data.image}} style={styles.favorImage} />
                  </View>
                  <View style={styles.favorImageContainer}>
                    <Text style={styles.favorInstructionTitle}>Instructions:</Text>
                    <Text style={styles.favorInstruction}>{data.analyzedInstructions}</Text>
                  </View>
                </View>
                <Hr lineColor='#b3b3b3' textColor='steelblue' />
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

import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight, TouchableOpacity, Switch } from 'react-native';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';
import FoodpairResults from './FoodpairResults.ios.js';
import AddIngredientCamera from './AddIngredientCamera.ios.js';
import { connect } from 'react-redux';
import { showSearch, rendering } from '../actions/addIngredientActions.ios.js';
import { bindActionCreators } from 'redux';
import * as addIngredient from '../actions/addIngredientActions.ios.js';

class AddIngredient extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ingredients = props.currentIngredients || props.ingredients;
    this.state = {
      currentIngredients: ds.cloneWithRows(ingredients),
      ingredientToAdd: ''
    }
  }

  addIngredient() {
    const ingredients = [];
    for (let ingredient of this.state.currentIngredients._dataBlob.s1) {
      ingredients.push(ingredient);
    }
    ingredients.push(this.state.ingredientToAdd)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ 
      currentIngredients: ds.cloneWithRows(ingredients),
      ingredientToAdd: ''
    })
    this.forceUpdate();
  }

  navigateAddIngredientCamera() {
    this.props.navigator.push({
      component: AddIngredientCamera,
      passProps: {
        currentIngredients: this.state.currentIngredients._dataBlob.s1,
        store: this.props.store
      }
    })
  }

  removeIngredient(ingredient) {
    const ingredients = this.state.currentIngredients._dataBlob.s1;
    const removeIndex = ingredients.indexOf(ingredient);
    ingredients.splice(removeIndex, 1);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ 
      currentIngredients: ds.cloneWithRows(ingredients)
    })
    this.forceUpdate();
  }

  searchMultipleFoodpairs() {
    this.props.actions.rendering();
    helpers.foodpairing.getFoodID(this.state.currentIngredients._dataBlob.s1)
      .then( resp => {
        helpers.foodpairing.getMultipleFoodpairings(resp.data)
          .then( response => {
            this.props.actions.rendering();
            const ingredients = this.state.currentIngredients._dataBlob.s1;
            this.props.navigator.push({
              component: FoodpairResults,
              passProps: { foodpairs: response.data, ingredients: ingredients }
            })
          })
          .catch( error => {
            console.log('Error ', error);
          })
      })
      .catch( err => {
        console.log('Error: ', err);
      })
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    const { state, actions } = this.props

    if (state.rendering) {
      return (
        <Image source= {{uri: 'https://media.blueapron.com/assets/loader/pot-loader-6047abec2ec57c18d848f623c036f7fe80236dce689bb48279036c4f914d0c9e.gif'}} style = {styles.loadingGif} />
      )
    }

    if (state.showSearch) {
      return (
        <View style={styles.addIngredientsContainer}>
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}>Current Ingredients</Text>
          </View>
          <ListView
            style={styles.addIngredientListView}
            dataSource={this.state.currentIngredients}
            renderRow={(ingredient, i) => (
              <View style={styles.addIngredientListItem}>
                <Text style={styles.addIngredientListItemText}>{ingredient}</Text>
                <TouchableOpacity
                  style={styles.removeListItem}
                  onPress={this.removeIngredient.bind(this, ingredient)}
                >
                  <Image style={styles.removeIcon} source={require('../removeicon.png')} />
                </TouchableOpacity>
              </View>
            )}
          />
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={this.searchMultipleFoodpairs.bind(this)}
            >
              <Image style={styles.searchIcon} source={require('../searchicon.png')} />
            </TouchableOpacity>
            <View style={styles.addMoreIngredientsContainer}>
              <View style={styles.searchBarPictureFrame}>
                <TextInput
                  onSubmitEditing={this.addIngredient.bind(this)}
                  style={styles.addIngredientInput}
                  onChangeText={(ingredientToAdd) => this.setState({ingredientToAdd})}
                  value={this.state.ingredientToAdd}
                  placeholder={'Add ingredient'}
                />
              </View>
              <Switch 
                onValueChange={actions.showSearch}
                style={styles.addIngredientSwitch}
                value={state.showSearch}
                />
            </View>
        </View>
      )
    } else {
      return (
        <View style={styles.addIngredientsContainer}>
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}>Current Ingredients</Text>
          </View>
          <ListView
            style={styles.addIngredientListView}
            dataSource={this.state.currentIngredients}
            renderRow={(ingredient, i) => (
              <View style={styles.addIngredientListItem}>
                <Text style={styles.addIngredientListItemText}>{ingredient}</Text>
                <TouchableOpacity
                  style={styles.removeListItem}
                  onPress={this.removeIngredient.bind(this, ingredient)}
                >
                  <Image style={styles.removeIcon} source={require('../removeicon.png')} />
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.addMoreIngredientsContainer}>
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={this.searchMultipleFoodpairs.bind(this)}
            >
              <Image style={styles.searchIcon} source={require('../searchicon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonView} onPress={this.navigateAddIngredientCamera.bind(this)}>
              <Image style={[styles.takePicture]} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
            </TouchableOpacity>
            <Switch 
              onValueChange={actions.showSearch}
              style={styles.addIngredientSwitch}
              value={state.showSearch}
              />
          </View>
        </View>
      )
    }
  }
}

export default connect(state => ({
    state: state.addIngredient
  }),
  (dispatch) => ({
    actions: bindActionCreators(addIngredient.default, dispatch)
  })
)(AddIngredient);

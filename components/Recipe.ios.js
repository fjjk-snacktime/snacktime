import React, { Component } from 'react';
import { Linking, Alert, TouchableOpacity, Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';
import AddRecipe from './AddRecipe.ios.js';
import ShareFacebook from './ShareFacebook.ios.js';
import { connect } from "react-redux";

class Recipe extends Component {
  constructor(props) {
    super(props);
    let steps = props.recipe.analyzedInstructions[0] ? props.recipe.analyzedInstructions[0].steps : [];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      steps: ds.cloneWithRows(steps),
      ingredients: []
    }
  }

  componentWillMount() {
    this.renderIngredients();
    this.renderOptions();
  }

  goBack() {
    this.props.navigator.pop();
  }

  renderIngredients() {
    let ingredients = [];
    for (let ingredient of this.props.recipe.extendedIngredients) {
      ingredients.push(ingredient.originalString);
    }
    this.setState({
      ingredients: ingredients
    })
  }

  renderOptions() {
    const recipe = this.props.recipe;
    recipe.vegan = recipe.vegan ? '∙ Vegan' : false;
    recipe.glutenFree = recipe.glutenFree ? '∙ Gluten Free' : false;
    recipe.dairyFree = recipe.dairyFree ? '∙ Dairy Free' : false;
    if (!recipe.vegan && !recipe.glutenFree && !recipe.dairyFree) {
      recipe.dairyFree = 'No Dietary Restrictions';
    }
    recipe.cheap = recipe.cheap ? '$' : '$$$';
    recipe.sustainable = recipe.sustainable ? '∙ Recipe Sustainable' : false;
    recipe.servings = recipe.servings ? recipe.servings : 'Not available';
    recipe.healthscore = recipe.healthscore ? recipe.healthscore : 'Not available';
    // recipe.sourceUrl
  }

  //DRY click handler for social media deep linking
  shareToSocialMedia(deepLink, appName, storeURL) {
    //deep link into the provided app if installed, else direct user to the proper app store link
    Linking.canOpenURL(appName.toLowerCase() + '://').then(supported => {
      if (!supported) {
        Alert.alert(`You must install the ${appName} app in order to use this feature.`,
                    '',
                    [{text: `Install ${appName}`, onPress: () => Linking.openURL(storeURL)},
                     {text: 'Not Now'}]
        );
      } else {
        return Linking.openURL(deepLink);
      }
    }).catch(err => /*Alert.alert('Error; ', err), */console.error('Error: ', err));
  }

  render() {
    const ingredients = this.state.ingredients.map((ingredient, i) => {
      return (
        <Text style = {styles.ingredientListText2} key={i}>∙ {ingredient} </Text>
      )
    });
    const recipe = this.props.recipe;

    return (
      <View style={styles.recipe}>
        <View style={styles.resultsTitle}>
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <Text style={styles.resultsTitleText}>Instructions for {this.props.food}:</Text>
        </View>
        <View style={styles.ingredientContainer}>
          <View style={styles.ingredientList}>
            <Text> {recipe.vegan} {recipe.glutenFree} {recipe.dairyFree}</Text>
            <Text> {recipe.cheap} {recipe.sustainable} Servings: {recipe.servings} Healthscore: {recipe.healthscore}</Text>
            <Text style={styles.recipeTitle2}>Ingredients:</Text>
            <Text style={styles.ingredientListText2}>{ingredients}</Text>
          </View>
          <View style={styles.recipeImageAndIcons}>
            <Image source={{uri: this.props.image}} style={styles.recipeImage} />
            <View style={styles.iconsContainer}>
              {
                this.props.state.isAuthenticated
                  ? (<ShareFacebook url={this.props.recipe.sourceUrl} />)
                  : (<Text></Text>)
              }
              <TouchableOpacity onPress={
                () => this.shareToSocialMedia('instagram://camera', 'Instagram', 'https://itunes.apple.com/us/app/instagram/id389801252?mt=8')
              }>
                <Image source={require('../public/instagram_icon.png')} style={styles.shareIcons} />
              </TouchableOpacity>
              <TouchableOpacity onPress={
                () => this.shareToSocialMedia(
                  `twitter://post?message=I%20just%20made%20${this.props.food.split(' ').join('%20')}%20(${this.props.food})%20with%20a%20little%20help%20from%20the%20app%20Snacktime!
                  ${this.props.recipe.sourceUrl}`,
                  'Twitter',
                  'https://itunes.apple.com/us/app/twitter/id333903271?mt=8'
                )
              }>
                <Image source={require('../public/twitter_icon.png')} style={styles.shareIcons} />
              </TouchableOpacity>
            </View>
            <AddRecipe info={this.props.recipe} ingredients={this.state.ingredients} userid={this.props.state.id} navigator={this.props.navigator} store={this.props.store}/>
          </View>
        </View>
        <View>
          <Text style={styles.recipeTitle2}>Directions:</Text>
        </View>
        <ListView
          style={styles.recipe}
          dataSource={this.state.steps}
          renderRow={(step, i) => {
            let image = step.ingredients[0] ? step.ingredients[0].image : 'https://s3-us-west-1.amazonaws.com/filmedin/food+(1).png';
            return (
            <View
              key={i}
              style={styles.recipeStep}
              underlayColor="grey"
            >
              <Image source={{uri: image}} style={styles.recipeImage} />
              <Text style={styles.recipeStepText}>step {step.number}: {step.step}</Text>
            </View>
            )}}
        />
      </View>
    )
  }
}

export default connect(state => ({
    state: state.facebook
  }), null
)(Recipe);

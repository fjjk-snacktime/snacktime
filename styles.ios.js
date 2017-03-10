import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
  },
  resultsTitle: {
    marginTop: Dimensions.get('window').height/30,
    width: Dimensions.get('window').width,
    backgroundColor: '#008080',
    alignSelf: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    borderBottomColor: 'darkgray',
    borderBottomWidth: 0.5,
  },
  compareRecipeTitle1: {
    marginTop: 40,
    width: Dimensions.get('window').width,
    backgroundColor: '#008080',
    alignSelf: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    borderBottomColor: 'darkgray',
    borderBottomWidth: 0.5,
    height: 200,
  },
  buttonContain: {
    alignItems: 'center',
  },
  resultsTitleText:{
    color: '#ebe6e0',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  compareRecipeText: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#ebe6e0',
  },
  foodPairResultsTitleText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  foodPairTextDescription: {
    color: '#ebe6e0',
    fontSize: 12,
    textAlign: 'center',
    margin: 2,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  resultsList: {
    flex: 1,
    backgroundColor: '#e2e2e2'
  },
  compareNutrientsHeader: {
    height: 250,
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 100,
    margin: 5,
    borderWidth: 1,
    color: '#94edc7',
  },
  recipeTitle: {
    color: '#ebe6e0',
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  recipeTitle2: {
    color: 'black',
    flexDirection: 'row',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  recipeDescription: {
    color: '#ebe6e0',
    fontSize: 20,
    textAlign: 'center',
    margin: 2,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    height: 150,
    borderBottomColor: '#008080'
  },
  listItemContainer: {
    height: 140,
    flexDirection: 'column',
    backgroundColor: '#008080',
    width: Dimensions.get('window').width - 110,
    flexWrap: 'wrap',
  },
  googleListItem: {
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 2,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    marginBottom: 5,
    height: 125,
    borderBottomColor: '#008080',
  },
  listItemTitle: {
  },
  listItemText: {
    marginTop: 15,
  },
  facebookButton: {
    alignSelf: 'center'
  },
  arrow: {
    marginLeft: 2,
    height: 80,
    width: 105,
  },
  compareNutrientsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  compareRecipe: {
    flex: 1,
    height: 400,
  },
  compareHeader: {
    flex: 1,
    flexWrap: 'wrap',
    height: 250,
  },
  compareNutrients: {
    backgroundColor: '#D3D3D3',
    height: 400,
  },
  compareRecipeTitle: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Palatino',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#ebe6e0',
  },
  text: {
    flexDirection: 'row',
    fontSize: 35,
    fontFamily: 'AppleSDGothicNeo-Light',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    color: '#ebe6e0',
  },
  foodPairText: {
    color: '#ebe6e0',
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  recipeStepText:{
    width: Dimensions.get('window').width - 150,
    flexDirection: 'row',
    fontSize: 12,
    color: '#ebe6e0',
    fontFamily: 'AppleSDGothicNeo-Light',
  },
  app: {
    flex: 7,
    width: Dimensions.get('window').width,
    backgroundColor: '#e2e2e2',
  },
  welcome: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeImage: {
    // flex: 4,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3
    // marginTop: Dimensions.get('window').height / 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonView: {
    flex: 1,
    backgroundColor: '#008080',
  },
  takePicture: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#008080',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#008080',
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
  },
  backButtonCamera: {
    flexDirection: 'row',
    paddingRight: Dimensions.get('window').width/3 - 50,
  },
  resultsPicture: {
    flexDirection: 'row',
    borderColor: 'darkgray',
    borderWidth: 0.5,
    height: 140,
    width: 100,
    padding: 1,
    marginLeft: 5,
  },
  compareRecipePadding: {
    height: 250,
  },
  shareButton: {
    height: 60,
    width: 120,
    padding: 5,
  },
  glyphicon: {
    flexDirection: 'row',
    height: 60,
    width: 60,
    padding: 5,
    marginRight: Dimensions.get('window').width/9,
  },
  navigationResults: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: Dimensions.get('window').width,
  },
  backButtonImage: {
    flexDirection: 'row',
    height: Dimensions.get('window').width/9,
    width: Dimensions.get('window').width/9,
  },
  navigationahover: {
    backgroundColor: 'deepskyblue',
  },

  searchBarPicture: {
    flexGrow: 1,
    height: 100,
    width: 100,
  },

  searchBarPictureFrame: {
    flex: 1,
    backgroundColor: '#008080',
  },

  searchBar: {
    height: 50,
    width: 200,
    marginTop: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#F5FCFF',
  },
  // for welcome page header
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 200,
    marginBottom: 20,
    marginLeft:125,
    width: 160,
    textAlign: 'center',
    backgroundColor:'transparent'
  },

  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5,
    marginLeft: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content:{
    fontSize: 22
  },

  comingInWord: {
    color: 'white',
    fontSize: 20,
    marginTop: 350,
    textAlign: 'center',
    backgroundColor:'transparent'
  },

  backgroundimage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    resizeMode: 'stretch', // or 'stretch',
  },

  backgroundVideoOuter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  backgroundVideo: {
    position: 'absolute',
    alignSelf: 'stretch',
    top: 0,
    left: 0,
    bottom: -100,
    right: 0,
  },
  ingredientText: {
    fontSize: 10,
  },
  ingredientList: {
    flexDirection: 'column',
    margin: 10,
    width: Dimensions.get('window').width - 160,
  },
  ingredientListText: {
    fontSize: 12,
    flexDirection: 'column',
    color: '#ebe6e0',
  },
  ingredientListText2: {
    fontSize: 12,
    flexDirection: 'column',
  },
  recipe: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: '#D3D3D3',
  },
  recipeStep: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    marginBottom: 5,
    backgroundColor: '#008080',
  },
  ingredientContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
  },
  recipeImageAndIcons: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  recipeImage: {
    height: 110,
    width: 110,
    margin: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  shareIcons: {
    height: 40,
    width: 40,
    marginLeft: 2
  },
  loadingGif:{
    marginTop: Dimensions.get('window').height/4,
    alignSelf: 'center',
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').width/4,
  },
  addIngredientButtonContainer: {
    justifyContent: 'center'
  },
  addIngredientButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 35,
    width: 35,
  },
  addIngredientText1: {
    flexDirection: 'row',
  },
  addIngredientText2: {
    flexDirection: 'row',
    width: 125,
  },
  addIngredientListView: {
    height: Dimensions.get('window').height / 5,
    backgroundColor: '#CCCCCC',
  },
  addIngredientListItem: {
    flex:4,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    borderColor: '#008080',
    borderWidth: 1,
    marginTop: 5,
  },
  addIngredientListItemText: {
    flexDirection: 'row',
    fontSize: 35,
    marginTop: 20,
  },
  removeListItem: {
    flexDirection: 'row',
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  removeIcon: {
    height: 30,
    width: 30,
    alignSelf: 'flex-start',
  },
  addMoreIngredientsContainer: {
    backgroundColor: '#008080',
  },
  addIngredientInput: {
    height: 50,
    width: 200,
    marginBottom: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  searchIconContainer: {
    height: 50,
    backgroundColor: '#008080',
  },
  searchIcon: {
    height: 45,
    width: 45,
    alignSelf: 'center',
  },
  switchContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#008080',
  },
  addIngredientCamera: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  switch:{
    right: -Dimensions.get('window').width/3,
    marginBottom: 50,
    backgroundColor: '#008080',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  addIngredientSwitch: {
    right: -Dimensions.get('window').width/1.2,
    marginBottom: 65,
    backgroundColor: '#008080',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  addIngredientsContainer: {
    flex: 1,
    backgroundColor: '#008080',
  },

  compareButton: {
    alignItems: 'center',
  },

  userPage: {
    
  }

});

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
  resultsTitleText:{
    color: '#ebe6e0',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#CCCCCC'
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
    marginBottom: 20,
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
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    height: 125,
    margin: 0, 
    borderBottomColor: '#008080'
  },
  listItemTitle: {
  },
  listItemText: {
    marginTop: 15,
  },
  arrow: {
    height: 60,
    width: 60,
  },
  compareNutrientsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  compareRecipe: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
  },
  compareHeader: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  compareRecipeTitle: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Palatino',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    flexDirection: 'row',
    fontSize: 35,
    fontFamily: 'AppleSDGothicNeo-Light',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 50,
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
    fontSize: 15,
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
  },
  takePicture: {
    height: 100,
    width: 100,
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
  },
  recipe: {
    flex: 1,
    borderColor: 'black',
    backgroundColor: '#CCCCCC',
  },
  recipeStep: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    marginBottom: 10,
    backgroundColor: '#F5FCFF',
  },
  switch:{
    right: -Dimensions.get('window').width/3,
    marginBottom: 50,
  },
  ingredientContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
  },
  recipeImage: {
    height: 140,
    width: 140,
  },
  loadingGif:{
    marginTop: Dimensions.get('window').height/4,
    alignSelf: 'center',
    height: Dimensions.get('window').height/4,
    width: Dimensions.get('window').width/4,
  },
  addIngredientButton: {
    borderRadius: 25,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    height: 20,
    width: 100,
  },
  addIngredientListView: {
    height: Dimensions.get('window').height / 1.8,
    backgroundColor: '#F5FCFF',
  },
  addIngredientListItem: {
    flexDirection: 'row',
    height: 100,
  },
  addIngredientListItemText: {
    fontSize: 35,
  },
  addMoreIngredientsContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  addIngredientInput: {
    height: 50,
    width: 200,
    marginTop: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#F5FCFF',
  },
// @media all and (max-width: 800px) {
//   .navigation {
//     justify-content: space-around;
//   }
// }

// @media all and (max-width: 600px) {
//   .navigation {
//     -webkit-flex-flow: column wrap;
//     flex-flow: column wrap;
//     padding: 0;
//   }

//   .navigation a {
//     text-align: center;
//     padding: 10px;
//     border-top: 1px solid rgba(255,255,255,0.3);
//     border-bottom: 1px solid rgba(0,0,0,0.1);
//   }


//   .navigation li:last-of-type a {
//     border-bottom: none;
//   }

});

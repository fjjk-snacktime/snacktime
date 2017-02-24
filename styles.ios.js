import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  resultsTitle: {
    marginTop: Dimensions.get('window').height/30,
    height: Dimensions.get('window').height/10,
    width: Dimensions.get('window').width/9 * 7,
    backgroundColor: '#65ECBD',
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  resultsTitleText:{
    fontSize: 30,
    textAlign: 'center',
    margin: 2, 
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  foodPairResultsTitleText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 2, 
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  resultsList: {
    flex: 1, 
    backgroundColor: 'deepskyblue'
  },
  listItem: {
    flex: 1,
    backgroundColor: '#E7FA79',
    borderColor: '#191919',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: Dimensions.get('window').width,
    margin: 0, 
    borderRadius: 6,
  },
  text: {
    flexDirection: 'row',
    fontSize: 35,
    fontFamily: 'Palatino',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  foodPairText: {
    flexDirection: 'row',
    fontSize: 15,
    fontFamily: 'Palatino',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  app: {
    flex: 6,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonView:{
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
    margin: 0, 
    backgroundColor: 'deepskyblue',    
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
  },
  resultsPicture: {
    flexDirection: 'row',
    height: 100,
    width: 100,
    padding: 1,
    marginRight: Dimensions.get('window').width/6,
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
    justifyContent: 'flex-end', 
  },

  searchBar: {
    height: 40, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1,
  }


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
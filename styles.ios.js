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
  app: {
    flex: 6,
    width: Dimensions.get('window').width,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
    margin: 0,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
  },

  glyphicon: {
    flexDirection: 'row',
    height: 60,
    width: 60,
    padding: 5,
    marginRight: Dimensions.get('window').width/9,
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
  },

  // for welcome page header
  header: {
    fontWeight: 'bold',
    fontSize: 30,
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

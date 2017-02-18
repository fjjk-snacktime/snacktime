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
    width: Dimensions.get('window').width
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
    marginRight: 60,
  },

  navigationahover: {
    backgroundColor: 'deepskyblue',
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
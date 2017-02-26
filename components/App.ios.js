import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Switch
} from 'react-native';
import styles from '../styles.ios.js';
import Nav from './Navbar.ios.js';
import SearchBar from './Searchbar.ios.js';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as app from '../actions/appActions.ios.js';
import getApp from '../reducers/appReducers.ios.js';
import camera from './Camera.ios.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 5,
    }
  }

  changeNavigationHome() {
    this.props.navigator.push({
      id: 'Home'
    })
  }

  changeNavigationCamera() {
    this.props.navigator.push({
      component: camera
    })
  }

  rendering() {
    actions.rendering();
    this.forceUpdate()
  }
  render() {
    console.log('props', this.props.actions.default)
    const {state, actions} = this.props;
    console.log('ACITONS', state)
    if (state.rendering) {
      return (
        <Image source= {{uri: 'https://media.blueapron.com/assets/loader/pot-loader-6047abec2ec57c18d848f623c036f7fe80236dce689bb48279036c4f914d0c9e.gif'}} style = {styles.loadingGif} />
      )
    }
    if (state.showSearchBar) {
      return (
        <View style={[styles.container]}>
          <View style={[styles.navigation]} >
            <Nav
              changeNavigationCamera={this.changeNavigationCamera.bind(this)}
            />
          </View>
          <View style={[styles.app, this.border('#079604')]} >
            <Text style={styles.welcome}>
              Welcome to Snack Time!
            </Text>
          </View>
          <View style={[styles.searchBarPictureFrame]} >
            <SearchBar navigator={this.props.navigator} rendering={actions.rendering}/>
          </View>
          <View style={{flexDirection: 'row'}}> 
            <Switch 
              onValueChange={actions.showSearchBar}
              style={styles.switch}
              value={state.showSearchBar} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.container]}>
          <View style={[styles.navigation]} >
            <Nav
              changeNavigationCamera={this.changeNavigationCamera.bind(this)}
            />
          </View>
          <View style={[styles.app, this.border('#079604')]} >
            <Text style={styles.welcome}>
              Welcome to Snack Time!
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonView]} onPress={this.changeNavigationCamera.bind(this)}>
            <Image style={[styles.takePicture]} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
          </TouchableHighlight>
          <View style={{flexDirection: 'row'}}> 
            <Switch 
              onValueChange={actions.showSearchBar}
              style={styles.switch}
              value={state.showSearchBar}
              />
          </View>
        </View>
      );
    }
  }
}

console.log('app', app)
export default connect(state => ({
    state: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(app.default, dispatch)
  })
)(App);

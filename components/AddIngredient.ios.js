import React, { Component } from 'react';
import { Text, View, Image, TextInput, ListView, TouchableHighlight } from 'react-native';
import helpers from '../helpers/helpers.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as app from '../actions/appActions.ios.js';
import getApp from '../reducers/appReducers.ios.js';

export default class AddIngredient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ paddingTop: 44 }}>
        <Text>Placeholder</Text>
      </View>
    );
  }
}

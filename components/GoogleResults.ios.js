import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View, ListView } from 'react-native';
import FoodpairResults from './FoodpairResults.ios.js';
import helpers from '../helpers/helpers.js';
import styles from '../styles.ios.js';

export default class GoogleResults extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.results),
      food: ''
    }
    this.onPress = this.onPress.bind(this);
  };

  changeNavigation() {
    helpers.foodpairing.getFoodpairings(this.state.food)
      .then(resp => {
        this.props.navigator.push({
          component: FoodpairResults,
          passProps: { foodpairs: resp.data, food: this.state.food }
        })
      })
      .catch(err => {
        console.log('error', err);
      })
  }

  onPress(data) {
    this.setState({ food: data }, this.changeNavigation);
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.resultsList}>
        <View style={styles.navigationResults}>
          <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
            <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
          </TouchableHighlight>
          <View style={styles.resultsTitle}> 
            <Text style={styles.resultsTitleText}> Google Image Results</Text>
          </View>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          style={styles.resultsList}
          renderRow={(rowData, i) => (
            <TouchableHighlight
              onPress={this.onPress.bind(this, rowData)}
              underlayColor="blue"
              >
              <View style={styles.listItem}>
                <Image style={styles.resultsPicture} source={{uri: 'https://img.clipartfest.com/4f33f01102ffa78ae307af47897d804c_happy-apple-clipart-cute-apple-clip-art_1100-1324.png'}} />
                <Text style={styles.text}>{rowData}</Text>
              </View>
            </TouchableHighlight>
            )}
        />
      </View>
    );
  }
}
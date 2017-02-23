import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View, ListView } from 'react-native';
import FoodpairResults from './FoodpairResults.ios.js';
import helpers from '../helpers/helpers.ios.js';
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
    helpers.foodpairing.getFoodID('apple')
      .then(resp => {
        return resp.data[0].id
      })
      .then(id => {
        helpers.foodpairing.getFoodpairings(id)
          .then(response => {
            console.log(response.data[0]._link)
            this.props.navigator.push({
              component: FoodpairResults,
              passProps: { foodpairs: response.data }
            })
          }) 
          .catch(error => {
            console.log('Error: ', error);
          })
      })
      .catch(err => {
        console.log('Error: ', err);
      }) 
  }

  onPress(data) {
    this.setState({ food: data }, this.changeNavigation);
  }

  render() {
    return (
      <View style={styles.resultsList}>
        <View style={styles.resultsTitle}> 
          <Text style={styles.resultsTitleText}> Image Results </Text>
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
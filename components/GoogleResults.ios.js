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
          <View style={styles.resultsTitle}> 
            <TouchableHighlight style={styles.backButton} onPress={this.goBack.bind(this)}>
              <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
            </TouchableHighlight>
            <Text style={styles.resultsTitleText}> Google Image Results</Text>
          </View>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, i) => (
            <TouchableHighlight
              onPress={this.onPress.bind(this, rowData)}
              underlayColor="blue"
              style={styles.resultsList}
              >
              <View style={styles.googleListItem}>
                <Image style={styles.arrow} source={{uri: 'https://ksr-ugc.imgix.net/assets/011/733/722/ad4cdb4ed5baf40f53046e1b52233450_original.png?w=1552&h=873&fit=fill&bg=FFFFFF&v=1463687602&auto=format&q=92&s=8fa745242affe751c539aca3c56c1e92'}} />
                <Text style={styles.text}>{rowData}</Text>
              </View>
            </TouchableHighlight>
            )}
        />
      </View>
    );
  }
}
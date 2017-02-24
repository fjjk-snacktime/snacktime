import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View, ListView } from 'react-native';
import FoodpairResults from './FoodpairResults.ios.js';
import helpers from '../helpers/helpers.js';

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
          passProps: { foodpairs: resp.data }
        })
      })
      .catch(err => {
        console.log('error', err);
      })
  }

  onPress(data) {
    this.setState({ food: data }, this.changeNavigation);
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, i) => (
            <TouchableHighlight
              key={i} 
              style={styles.listItem}
              onPress={this.onPress.bind(this, rowData)}
              underlayColor="grey"
              value={rowData}
              >
              <View style={styles.view}>
                <Text style={styles.text}>{rowData}</Text>
              </View>
            </TouchableHighlight>
            )}
        />
      </View>
    );
  }
}
const styles = {
  listItem: {
    flex: 1,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    height: 75,
    fontSize: 35,
    fontWeight: 'bold'
  },
  view: {
    justifyContent: 'center'
  }
}
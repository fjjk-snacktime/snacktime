import React, { Component } from 'react';
import axios from 'axios';
import {
        View,
        Text,
        Image,
        Navigator,
        Button,
        ListView,
        Icon,
        TouchableHighlight,
        Alert
      } from 'react-native';
import styles from '../styles.ios.js';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  goBack() {
    this.props.navigator.pop();
  }

  componentWillMount() {
    this.gettt();
  }

  // create NewUser if not find in DB
  createNewUserIfNotAccount(useridforfb) {
    var local = 'http://localhost:8000/'
    var userid = useridforfb
    var reqBody = {
      "id": userid
    }
    axios.post(`${local}database`, reqBody)
    .then((reponese) => {
      console.log('new user created', reponese.data)
    }).catch((error) => {
      console.log('no user created')
    });
  }

  gettt() {
    var local = 'http://localhost:8000/'
    var FacebookUserID = this.props.state.payload.userID
    axios.get(`${local}database`, {
      params: {
        ID: FacebookUserID
      }
    })
    .then((response) => {
      console.log('this is coming back from db', response.data[0].FavoriteRecipe)
      var userrecipedata = response.data[0].FavoriteRecipe
        this.setState({
          dataSource: userrecipedata
        })
    })
    .catch((error) => {
      console.log('no data')
    });
  }

  render() {
    console.log(this.state.dataSource)
    return (
      <View>
        <Text style={{marginTop: 100}}>UserHomePage</Text>
        <TouchableHighlight style={styles.backButtonCamera} onPress={this.goBack.bind(this)}>
          <Image style={styles.backButtonImage} source={{uri: 'https://cdn0.iconfinder.com/data/icons/vector-basic-tab-bar-icons/48/back_button-128.png'}} />
        </TouchableHighlight>
        {this.state.dataSource.map((data, index) => (
          <Text key={index} style={{marginTop: 100}}>{data.name}</Text>
        ))}
      </View>
    )
  }
}

export default connect(state => ({
    state: state.facebook
  }), null
)(UserPage);

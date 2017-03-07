import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Navigator, Button, Icon, Alert} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: false,
      newuser: false
    }
  }

  componentDidMount() {
    var local = 'http://localhost:8000/'
    var FacebookUserID = ''
    var testingID = '189372'
    // hopeing to be '10210392928233310'
    // axio will query with FacebookUserID
    // find user from DB
    axios.get(`${local}database`, {
      params: {
        ID: testingID
      },
    }).then((response) => {
      console.log('this is the payload', this.props.state)
      console.log('i got the data', response.data)
      this.setState({
        data: response.data[0].FavoriteRecipe
      });
    }).catch((error) => {
      console.log('no data')
      Alert.alert("do you want to make a account")
    });
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

  render() {
    return (
      <View>
        <Text style={{marginTop: 100}}>UserHomePage</Text>
        <Text style={{marginTop: 200}}>'FavoriteRecipe', {this.state.data}</Text>
      </View>
    )
  }
}

export default connect(state => ({
    state: state.facebook
  }), null
)(UserPage);
